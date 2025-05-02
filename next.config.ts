/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nyc3.digitaloceanspaces.com",
        port: "", // No specific port, uses default HTTPS port (443)
        pathname: "/**", // Allow all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "178.132.1.116",
        port: "3001", // Keep this if your server explicitly uses port 3001
        pathname: "/**", // Allow all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "offset7images.nyc3.digitaloceanspaces.com",
        port: "", // Remove port or set to empty to use default HTTPS port (443)
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;