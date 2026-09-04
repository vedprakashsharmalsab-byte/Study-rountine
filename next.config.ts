import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "katex", "rehype-katex", "remark-math"],
  },
};

export default nextConfig;

