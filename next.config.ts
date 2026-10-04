import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // old CRA routes
  async redirects() {
    return [
      // the old vercel.app alias is a duplicate of the canonical domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "portfolio-eight-peach-33.vercel.app" }],
        destination: "https://marvin.getrelaytech.com/:path*",
        permanent: true,
      },
      { source: "/project", destination: "/#products", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/resume", destination: "/#resume", permanent: true },
    ];
  },
};

export default nextConfig;
