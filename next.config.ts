import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // Enables static HTML export
  distDir: 'out',          // Specifies build output directory
  images: {
    unoptimized: true,     // Necessary for GitHub Pages
  },
  experimental: {
    appDir: true,          // Optional: remove if not using the app directory feature
  },
};

export default nextConfig;
