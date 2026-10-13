import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  // Disable strict mode to avoid double-renders on 2-core devices
  reactStrictMode: false,
  // Mark Node.js-only packages as external so they are not bundled by Webpack.
  // Without this, pg (which uses net/tls/fs) causes 500s in Next.js serverless
  // API routes because those native Node modules can't be bundled for the
  // "edge" or "node" runtimes when Webpack tries to inline them.
  serverExternalPackages: ["pg", "drizzle-orm"],
  experimental: {
    // Tree-shake heavy icon/math libraries — reduces initial bundle parse time
    optimizePackageImports: [
      "lucide-react",
      "katex",
      "rehype-katex",
      "remark-math",
      "react-markdown",
      "framer-motion",
    ],
  },
  // Compiler optimizations (SWC minify is always on in Next.js 16)
  compiler: {
    // Remove console.log in production builds
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
};

export default nextConfig;


