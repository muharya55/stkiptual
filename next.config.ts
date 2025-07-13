import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ['http://103.127.133.37'], // tambahkan IP atau domain
  // },
  images: {
    remotePatterns: [new URL('http://103.127.133.37/**')],
  },
};

export default nextConfig;
