import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    REST_API_URL: `${process.env.NEXT_PUBLIC_API_URL}`
  },
};

export default nextConfig;