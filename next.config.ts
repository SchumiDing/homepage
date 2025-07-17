import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // 加载到 GitHub Pages 子路径下
  basePath: '/homepage',
  assetPrefix: '/homepage/',
  // 导出时在路径末尾加斜杠，生成静态目录结构
  trailingSlash: true,
  /* config options here */
};

export default nextConfig;
