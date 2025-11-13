import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Add empty turbopack config to resolve the conflict
  turbopack: {},
  // Optional: Configure Turbopack to handle the fs module
  experimental: {
    turbo: {
      rules: {
        // These are typically not needed for client-side, but add if issues persist
        '*.node': { browser: false }
      }
    }
  }
};

export default nextConfig;