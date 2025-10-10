import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/DelightedByBailey-CursorAI' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/DelightedByBailey-CursorAI' : '',
};

export default nextConfig;
