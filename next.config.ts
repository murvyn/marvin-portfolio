import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // old CRA routes
  async redirects() {
    return [
      { source: "/project", destination: "/#products", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/resume", destination: "/#resume", permanent: true },
    ];
  },
};

export default nextConfig;
