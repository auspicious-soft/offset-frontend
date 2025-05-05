import { AxiosResponse } from "axios";

// Interface for standardized error response
interface ErrorResponse {
  status: number;
  message: string;
  error?: any;
}

// Error response handler function
export const errorResponseHandler = (
  message: string,
  status: number,
  res: AxiosResponse | null
): Promise<ErrorResponse> => {
  const errorResponse: ErrorResponse = {
    status: status || 500,
    message: message || "An unexpected error occurred",
    error: res?.data || null,
  };

  // Return a rejected Promise with the formatted error response
  return Promise.reject(errorResponse);
};