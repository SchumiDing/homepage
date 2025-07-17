import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // 只在生产环境使用 GitHub Pages 的配置
  basePath: process.env.NODE_ENV === 'production' ? '/homepage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/homepage/' : '',
  // 导出时在路径末尾加斜杠，生成静态目录结构
  trailingSlash: true,
  /* config options here */
};

export default nextConfig;
