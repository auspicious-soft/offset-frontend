# Offset7 Frontend Documentation

## Project Overview
Offset7 is a cybersecurity monitoring and threat intelligence platform built with Next.js 15.2.4. The application provides real-time monitoring, threat intelligence, and actionable insights to protect organizations from cyber threats.

## Technical Stack
- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist (Sans & Mono)
- **Package Manager**: npm/yarn

## Project Structure
```
offset-frontend/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── components/         # Reusable components
│   │   ├── darkweb/           # Darkweb related pages
│   │   ├── newss/             # News section
│   │   ├── contact-us/        # Contact page
│   │   ├── dashboard/         # Dashboard pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   └── lib/                    # Utility functions
├── public/                     # Static assets
└── package.json               # Project dependencies
```

## Key Features
1. **SEO Optimization**
   - Dynamic metadata generation
   - Structured data implementation
   - Sitemap generation
   - Robots.txt configuration

2. **Page Structure**
   - Homepage with news feed
   - Darkweb incident monitoring
   - News section
   - Contact page
   - Homepage interface

3. **Components**
   - Headers
   - Footers
   - News Cards
   - Navigation Elements

## SEO Implementation
### Metadata Configuration
Each page implements custom metadata for optimal search engine visibility:

```typescript
export const metadata: Metadata = {
  title: "Page Title | Offset7",
  description: "Page description",
  keywords: "relevant, keywords",
  // ...
};
```

### Structured Data
The application implements various Schema.org structured data types:
- Organization
- WebPage
- Article
- FAQPage
- BreadcrumbList
- CollectionPage

## Routing Structure
- `/` - Homepage
- `/darkweb` - Darkweb incidents listing
- `/darkweb/detail` - Detailed incident view
- `/newss` - News section
- `/contact-us` - Contact page
- `/homepage` - User homepage

## Performance Optimizations
1. **Image Optimization**
   - Next.js Image component for automatic optimization
   - Responsive images with appropriate sizing
   - Lazy loading implementation

2. **Font Optimization**
   - Google Fonts with subset optimization
   - Custom font variables for consistent typography

## Security Features
1. **Headers**
   - Content Security Policy
   - X-Frame-Options
   - X-Content-Type-Options

2. **Environment Variables**
   - Secure configuration management
   - Production/development environment separation

## Responsive Design
The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Social Media Integration
- Twitter Card support
- Open Graph protocol implementation
- Social media sharing optimization

## Development Guidelines

### Code Style
- TypeScript strict mode enabled
- ESLint configuration
- Prettier formatting

### Component Structure
```typescript
// Example component structure
import React from 'react';
import type { ComponentProps } from './types';

export const Component: React.FC<ComponentProps> = ({
  prop1,
  prop2,
}) => {
  return (
    // JSX
  );
};
```

### Metadata Implementation
```typescript
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Page Title',
  description: 'Page Description',
  path: '/path',
  ogImage: '/image.jpg',
});
```

## Deployment
The application is configured for deployment on Vercel with:
- Automatic HTTPS
- Edge Functions support
- Asset optimization
- Automatic preview deployments

## Environment Variables
Required environment variables:
```
NEXT_PUBLIC_BASE_URL=https://offset7.com
```

## Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Performance Metrics
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

## Future Enhancements
1. Implement user authentication
2. Add real-time threat monitoring
3. Enhance dashboard analytics
4. Add multi-language support
5. Implement advanced search functionality

## Support and Maintenance
For technical support or maintenance:
- Email: support@offset7.com
- Documentation updates: Regular monthly updates
- Security patches: Immediate implementation

## License
Proprietary - All rights reserved

---

Last updated: [Current Date]
Version: 1.0.0