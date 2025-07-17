import type { Metadata } from "next";
import themes from "../../themes.json";
import "./globals.css";

export const metadata: Metadata = {
  title: "丁瑞毅 - 全栈开发工程师",
  description: "热衷于技术创新的全栈开发工程师，专注于构建高质量的软件解决方案",
  keywords: ["全栈开发", "软件工程师", "React", "Node.js", "TypeScript", "云计算"],
  authors: [{ name: "丁瑞毅" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={themes.default}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
