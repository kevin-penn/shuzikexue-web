import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: '/assets/',
  basePath: '/docs',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: 'build',
};

export default nextConfig;
