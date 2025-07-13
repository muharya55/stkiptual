import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_API_URL||''], // tambahkan IP atau domain
  },
};

export default nextConfig;
