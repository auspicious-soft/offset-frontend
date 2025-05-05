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
    const language = localStorage.getItem("language") || "en"; // Default to 'en' if not set
    config.headers["Accept-Language"] = language;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling 401 Unauthorized errors
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: any) => {
    const originalRequest: CustomAxiosRequestConfig = error.config;

    if (error.response?.status === httpStatusCode.UNAUTHORIZED && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        const { token: newToken, refreshToken: newRefreshToken } = await refreshTokenService(refreshToken);

        localStorage.setItem("token", newToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        processQueue(null, newToken);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = "/";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

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
    const token = await getTokenCustom();
    const language = localStorage.getItem("language") || "en";
    return axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
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
    return {
      token: response.data.token,
      refreshToken: response.data.refreshToken,
    };
  } catch (error) {
    throw error;
  }
};

export const getAxiosInstance = async (): Promise<AxiosInstance> => {
  return await createAuthInstance();
};

export const postAxiosInstance = async (): Promise<AxiosInstance> => {
  return await submitRequest();
};