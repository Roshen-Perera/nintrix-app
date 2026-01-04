import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@clerk/nextjs', '@clerk/shared'],
  experimental: {
    optimizePackageImports: ['@clerk/nextjs'],
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cdn.sanity.io',
      port: '',
      pathname: '/images/**',
    }]
  }
};

export default nextConfig;
