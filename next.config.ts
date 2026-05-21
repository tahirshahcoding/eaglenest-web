import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/client-portal",
        destination: "https://eaglenestportal.vercel.app",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
