import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',        // Enables static HTML export
  distDir: 'out',          // Specifies build output directory
  images: {
    unoptimized: true,     // Necessary for GitHub Pages
  },
};

export default nextConfig;
