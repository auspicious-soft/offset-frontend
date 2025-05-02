import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Offset7 - Cybersecurity Monitoring & Threat Intelligence",
  description: "Stay ahead of cyber threats with Offset7. Get real-time monitoring, threat intelligence, and actionable insights to protect your organization from evolving digital risks.",
  keywords: "cybersecurity, threat intelligence, cyber threats, data protection, ransomware, phishing, darkweb monitoring",
  authors: [{ name: "Offset7 Team" }],
  creator: "Offset7",
  publisher: "Offset7",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://offset7.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Offset7 - Cybersecurity Monitoring & Threat Intelligence",
    description: "Stay ahead of cyber threats with Offset7. Get real-time monitoring, threat intelligence, and actionable insights to protect your organization.",
    url: "/",
    siteName: "Offset7",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Offset7 - Cybersecurity Monitoring & Threat Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Offset7 - Cybersecurity Monitoring & Threat Intelligence",
    description: "Stay ahead of cyber threats with Offset7. Get real-time monitoring and threat intelligence.",
    images: ["/images/twitter-image.jpg"],
    creator: "@offset7",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans overflo-custom`}
      > <ToastContainer />
        {children}
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


