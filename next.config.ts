import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/<repo-name>", // Replace with your GitHub repository name if using GitHub Pages
};

export default nextConfig;
