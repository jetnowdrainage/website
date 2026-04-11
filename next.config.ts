import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ["192.168.0.21", "192.168.0.41"],
};

export default nextConfig;
