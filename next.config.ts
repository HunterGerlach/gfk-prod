import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  
  distDir: 'out',    
  images: {
    unoptimized: true,
  },
};

// Debugging to confirm config is applied
console.log("Next.js Config: ", nextConfig);

export default nextConfig;
