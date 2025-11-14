import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true, // Temporarily disable ESLint during builds
  },
  
  // Enable static export for deployment
  output: 'export',
  
  // Optimize images for static export
  images: {
    unoptimized: true
  },
  
  // Add trailing slash for better compatibility
  trailingSlash: true,
  
  // Disable server-side features for static export
  reactStrictMode: true,
  
  // Configure base path if deploying to subdirectory
  // basePath: '/portfolio', // Uncomment if needed
  
  // Asset prefix for CDN (optional)
  // assetPrefix: 'https://cdn.example.com', // Uncomment if using CDN
  
  // Optimize performance
  poweredByHeader: false,
  
  // Configure webpack to handle build warnings
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
  
  // Configure external domains for images (if needed)
  // domains: ['example.com'], // Add external image domains
};

export default nextConfig;
