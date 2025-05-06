"use client";

import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "@/components/ProtectedRoute";
import { usePathname } from "next/navigation";
import Headers from "@/app/components/headers/page";
import Footers from "@/app/components/footers/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata (now as a constant since we're using 'use client')
const metadataObj = {
  title: "Offset7 - Cybersecurity Monitoring & Threat Intelligence",
  description: "Stay ahead of cyber threats with Offset7. Get real-time monitoring, threat intelligence, and actionable insights to protect your organization from evolving digital risks.",
  keywords: "cybersecurity, threat intelligence, cyber threats, data protection, ransomware, phishing, darkweb monitoring",
  // ... other metadata properties
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  // Define public routes that don't require authentication
  const publicRoutes = ['/', '/signup'];
  const isPublicRoute = publicRoutes.includes(pathname || '') || 
                        pathname?.startsWith('/_next') || 
                        pathname?.startsWith('/api') ||
                        pathname?.includes('.') || // Static files
                        pathname?.startsWith('/images');

  // Handle hydration issues by only rendering client-specific code after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if we should show header/footer
  // Don't show on login/signup pages
  const showHeaderFooter = !publicRoutes.includes(pathname || '');

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans overflo-custom`}
      >
        <ToastContainer />
        {!mounted ? (
          // Show a simple loading state before client-side code runs
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : isPublicRoute ? (
          // Render children directly for public routes (no header/footer)
          children
        ) : (
          // Wrap with ProtectedRoute for protected routes
          <ProtectedRoute>{children}</ProtectedRoute>
        )}
        {/* Structured data for organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Offset7",
              "url": "https://offset7.com",
              "logo": "https://offset7.com/images/logo.png",
              "sameAs": [
                "https://twitter.com/offset7",
                "https://www.linkedin.com/company/offset7",
                "https://www.facebook.com/offset7"
              ],
              "description": "Offset7 provides cybersecurity monitoring and threat intelligence solutions to protect organizations from evolving digital risks."
            })
          }}
        />
      </body>
    </html>
  );
}
