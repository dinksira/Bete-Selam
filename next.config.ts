import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Only include turbopack if you're using specific features
  // But the empty object {} is causing the warning
};

export default nextConfig;