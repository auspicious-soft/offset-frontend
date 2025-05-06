import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define public routes that don't require authentication
const publicRoutes = ['/', '/signup'];

export function middleware(request: NextRequest) {
  // IMPORTANT: Middleware runs on the server and CANNOT access localStorage
  // localStorage is only available in the browser/client-side
  
  // For server-side route protection, we need to use cookies instead
  const token = request.cookies.get('auth-token')?.value;
  
  // Get the path from the URL
  const path = request.nextUrl.pathname;
  
  // Check if the path is a public route
  const isPublicRoute = publicRoutes.includes(path) || 
                        path.startsWith('/_next') || 
                        path.startsWith('/api') ||
                        path.includes('.') || // Static files
                        path.startsWith('/images');
  
  // If no token and trying to access a protected route, redirect to login
  if (!token && !isPublicRoute) {
    const loginUrl = new URL('/', request.url);
    return NextResponse.redirect(loginUrl);
  }
  
  // Otherwise, continue with the request
  return NextResponse.next();
}

// Configure which paths should trigger this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts, /images (static files)
     * 4. /favicon.ico, /sitemap.xml (static files)
     */
    '/((?!api|_next|fonts|images).*)',
  ],
};


