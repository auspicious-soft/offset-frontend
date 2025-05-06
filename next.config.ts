/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nyc3.digitaloceanspaces.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "178.132.1.116",
        port: "3001",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "offset7images.nyc3.digitaloceanspaces.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.nokia.com",
        pathname: "/**", // Allow all paths under nokia.com
      },
    ],
  },
};

export default nextConfig;
