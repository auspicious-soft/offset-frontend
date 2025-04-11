import { Metadata } from 'next';

// Base URL for the site
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://offset7.com';

// Default metadata values
const defaultTitle = 'Offset7 - Cybersecurity Monitoring & Threat Intelligence';
const defaultDescription = 'Stay ahead of cyber threats with Offset7. Get real-time monitoring, threat intelligence, and actionable insights to protect your organization from evolving digital risks.';
const defaultKeywords = 'cybersecurity, threat intelligence, cyber threats, data protection, ransomware, phishing, darkweb monitoring';
const defaultOgImage = '/images/og-image.jpg';

// Generate metadata for pages
export function generateMetadata({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  path = '/',
  ogImage = defaultOgImage,
  ogType = 'website',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}): Metadata {
  // Construct full URL for canonical and OG
  const url = `${baseUrl}${path}`;
  
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Offset7',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@offset7',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  };
}

// Generate article metadata for news pages
export function generateArticleMetadata({
  title,
  description,
  path,
  ogImage,
  publishedTime,
  modifiedTime,
  authorName,
  tags = [],
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  ogImage: string;
  publishedTime: string;
  modifiedTime?: string;
  authorName: string;
  tags?: string[];
  noIndex?: boolean;
}): Metadata {
  const baseMetadata = generateMetadata({
    title,
    description,
    path,
    ogImage,
    ogType: 'article',
    noIndex,
  });

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      type: 'article',
      authors: [authorName],
      publishedTime,
      modifiedTime,
      tags,
    },
  };
}
