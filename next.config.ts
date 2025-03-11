import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    //FIXME
    unoptimized: false
  },
};

export default nextConfig;
