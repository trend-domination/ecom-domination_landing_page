import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "dist",
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
