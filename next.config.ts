import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    //FIXME
    unoptimized: false,
  },
  basePath: '',
  assetPrefix: '/',
  webpack: (config) => {
    config.resolve.alias['@/styles'] = './src/styles/*';
    return config;
  },
};

export default nextConfig;
