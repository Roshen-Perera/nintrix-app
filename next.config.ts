import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@clerk/nextjs', '@clerk/shared'],
  experimental: {
    optimizePackageImports: ['@clerk/nextjs'],
  },
};

export default nextConfig;
