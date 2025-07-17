import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // 加载到 GitHub Pages 子路径下
  basePath: '/homepage',
  assetPrefix: '/homepage',
  /* config options here */
};

export default nextConfig;
