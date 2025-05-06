import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getTokenCustom } from "@/actions";
import { errorResponseHandler } from "@/utils/responseHandler";
import httpStatusCode from "http-status";

// Extend InternalAxiosRequestConfig to include the custom _retry property
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Queue to store failed requests while refreshing token
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Create axios instance with default headers
export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    role: "admin",
  },
});

// Request interceptor to add Accept-Language header
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const language = localStorage.getItem("language") || "en";
    config.headers["Accept-Language"] = language;
    
    // Add token to all requests
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling 401 Unauthorized errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: any) => {
    // Make sure error.config exists before proceeding
    if (!error.config) {
      console.error('Error object has no config:', error);
      return Promise.reject(error);
    }

    const originalRequest: CustomAxiosRequestConfig = error.config;
    
    // Add detailed logging
    console.log('Response error status:', error.response?.status);
    console.log('Original request URL:', originalRequest.url);
    console.log('Original request retry flag:', originalRequest._retry);
    console.log('Is refreshing flag:', isRefreshing);

    // Check if error is 401 and we haven't tried refreshing yet
    if (
      error.response?.status === httpStatusCode.UNAUTHORIZED && 
      !originalRequest._retry
    ) {
      console.log('401 Unauthorized detected, attempting token refresh');
      
      if (isRefreshing) {
        console.log('Token refresh already in progress, queueing request');
        // If already refreshing, queue this request
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            console.log('Queue processed, retrying with new token');
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            console.error('Queue processing failed:', err);
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        console.log('Found refresh token:', refreshToken ? 'Yes' : 'No');
        
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        console.log('Calling refresh token service');
        const { token: newToken, refreshToken: newRefreshToken } = await refreshTokenService(refreshToken);
        console.log('Token refresh successful, new token:', newToken.substring(0, 10) + '...');

        // Store new tokens
        localStorage.setItem("token", newToken);
        localStorage.setItem("refreshToken", newRefreshToken);
        console.log('Tokens updated in localStorage');

        // Update auth header for the original request
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        console.log('Updated Authorization header for retry');
        
        // Process any queued requests
        processQueue(null, newToken);
        
        // Retry the original request with new token
        console.log('Retrying original request');
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        processQueue(refreshError, null);
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        console.log('Tokens removed from localStorage due to refresh failure');
        window.location.href = "/";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
        console.log('Reset isRefreshing flag');
      }
    }

    // If not a 401 error or retry already attempted, proceed with normal error handling
    console.log('Proceeding with normal error handling');
    return errorResponseHandler(
      error.response?.data?.message || "Request failed",
      error.response?.status || httpStatusCode.INTERNAL_SERVER_ERROR,
      error.response
    );
  }
);

// Create an instance for refreshing tokens (without Authorization header initially)
const createAuthInstance = async () => {
  try {
    const token = localStorage.getItem("token"); // Use localStorage directly instead of getTokenCustom
    const language = localStorage.getItem("language") || "en";
    
    // Create a new axios instance with the current token
    const instance = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        "Content-Type": "application/json",
        "Accept-Language": language,
      },
    });
    
    // Add the same response interceptor to this instance
    instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        // Copy the same interceptor logic here
        if (!error.config) {
          console.error('Error object has no config:', error);
          return Promise.reject(error);
        }

        const originalRequest = error.config;
        originalRequest._retry = originalRequest._retry || false;
        
        console.log('Auth instance error status:', error.response?.status);
        console.log('Auth instance retry flag:', originalRequest._retry);
        
        if (
          error.response?.status === 401 && 
          !originalRequest._retry
        ) {
          console.log('Auth instance detected 401, attempting refresh');
          originalRequest._retry = true;
          
          try {
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) {
              throw new Error("No refresh token available");
            }
            
            const { token: newToken, refreshToken: newRefreshToken } = await refreshTokenService(refreshToken);
            console.log('Auth instance refresh successful');
            
            // Update tokens
            localStorage.setItem("token", newToken);
            localStorage.setItem("refreshToken", newRefreshToken);
            
            // Update auth header and retry
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
            return axios(originalRequest);
          } catch (refreshError) {
            console.error('Auth instance refresh failed:', refreshError);
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            window.location.href = "/";
            return Promise.reject(refreshError);
          }
        }
        
        return Promise.reject(error);
      }
    );
    
    return instance;
  } catch (error) {
    console.error("Error creating auth instance:", error);
    throw error;
  }
};

// Instance for POST requests (e.g., submitting forms)
const submitRequest = async () => {
  try {
    const token = await getTokenCustom();
    const language = localStorage.getItem("language") || "en";
    return axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept-Language": language,
      },
    });
  } catch (error) {
    console.error("Error getting token:", error);
    throw error;
  }
};

// Refresh token service
const refreshTokenService = async (refreshToken: string): Promise<{ token: string; refreshToken: string }> => {
  try {
    const language = localStorage.getItem("language") || "en";
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/refresh`,
      { refreshToken },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": language,
        },
      }
    );
    
    // Log the response to see what we're getting back
    console.log("Refresh token response:", response.data);
    
    // Make sure we're extracting the correct properties from the response
    const newToken = response.data.token || response.data.access_token;
    const newRefreshToken = response.data.refreshToken || response.data.refresh_token;
    
    if (!newToken || !newRefreshToken) {
      console.error("Invalid token response format:", response.data);
      throw new Error("Invalid token response format");
    }
    
    // Update localStorage immediately
    localStorage.setItem("token", newToken);
    localStorage.setItem("refreshToken", newRefreshToken);
    
    return {
      token: newToken,
      refreshToken: newRefreshToken,
    };
  } catch (error) {
    console.error("Error in refreshTokenService:", error);
    throw error;
  }
};

export const getAxiosInstance = async (): Promise<AxiosInstance> => {
  return await createAuthInstance();
};

export const postAxiosInstance = async (): Promise<AxiosInstance> => {
  return await submitRequest();
};

// Test your refresh token service directly
export const testRefreshTokenService = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    console.error("No refresh token available");
    return;
  }
  
  console.log("Before refresh - Token:", localStorage.getItem("token")?.substring(0, 10) + "...");
  console.log("Before refresh - RefreshToken:", refreshToken.substring(0, 10) + "...");
  
  try {
    const result = await refreshTokenService(refreshToken);
    console.log("Refresh token service test result:", result);
    
    // Verify localStorage was updated
    const newToken = localStorage.getItem("token");
    const newRefreshToken = localStorage.getItem("refreshToken");
    
    console.log("After refresh - Token:", newToken?.substring(0, 10) + "...");
    console.log("After refresh - RefreshToken:", newRefreshToken?.substring(0, 10) + "...");
    
    return result;
  } catch (error) {
    console.error("Refresh token service test failed:", error);
    throw error;
  }
};
