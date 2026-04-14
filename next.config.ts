import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  /** Framer Motion ships mixed module shapes; transpiling avoids occasional Webpack “module is not a function” in dev. */
  transpilePackages: ["framer-motion"],
};

export default nextConfig;
