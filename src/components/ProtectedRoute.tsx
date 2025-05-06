"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { testRefreshTokenService } from '@/config/axios';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if token exists
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');
        
        if (!token && !refreshToken) {
          // No tokens at all, redirect to login
          console.log("No tokens found, redirecting to login");
          router.replace('/');
          return;
        }
        
        if (!token && refreshToken) {
          // Token missing but refresh token exists, try to refresh
          console.log("Token missing but refresh token exists, attempting refresh");
          try {
            // Use the existing refresh token service
            await testRefreshTokenService();
            // If successful, we're authenticated
            setIsAuthenticated(true);
          } catch (error) {
            // Refresh failed, redirect to login
            console.error("Token refresh failed:", error);
            localStorage.removeItem('refreshToken'); // Clean up invalid refresh token
            router.replace('/');
          }
          return;
        }
        
        // Token exists, we're authenticated
        console.log("Token found, user is authenticated");
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Authentication check error:", error);
        // Clear any potentially corrupted tokens
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        router.replace('/');
      }
    };
    
    checkAuth();
  }, [router]);

  // Show loading spinner while checking authentication
  if (isAuthenticated === null) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>;
  }

  // If authenticated, render children
  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;


