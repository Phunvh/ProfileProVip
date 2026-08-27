import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <-- BỔ SUNG DÒNG NÀY
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;