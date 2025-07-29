import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ['http://103.127.133.37'], // tambahkan IP atau domain
  // },
  images: {
    remotePatterns: [new URL('https://admin.stkip.ac.id/**')],
  },
  // images: {
  //   remotePatterns: [new URL('http://localhost:8000/**')],
  // },
};

export default nextConfig;
