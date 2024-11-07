import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',          // Enables static HTML export
  distDir: 'out',            // Outputs static files to `./out` directory
  trailingSlash: true,       // Ensures URLs end with a trailing slash for relative paths
  images: {
    unoptimized: true,       // Disable image optimization for static sites
  },
};

export default nextConfig;
