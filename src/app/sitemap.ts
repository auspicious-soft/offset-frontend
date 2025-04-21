import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://offset7.com';
  
  // Define your routes
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily" as "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/newss`,
      lastModified: new Date(),
      changeFrequency: 'daily' as 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/darkweb`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/homepage`,
      lastModified: new Date(),
      changeFrequency: "weekly" as "weekly",
      priority: 0.8,
    },
  ];

  return routes.map(route => ({
    ...route,
    changeFrequency: route.changeFrequency as "daily" | "monthly" | "weekly" | "always" | "hourly" | "yearly" | "never"
  }));
}

