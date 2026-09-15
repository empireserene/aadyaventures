import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sectors/oil-energy",
        destination: "/sectors",
        permanent: true,
      },
      {
        source: "/insights/allocating-across-technology-real-estate-and-energy",
        destination: "/insights/allocating-across-technology-and-real-estate",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
