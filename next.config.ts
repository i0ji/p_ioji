import type { NextConfig } from 'next';

//LATER
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    //FIXME
    unoptimized: false,
  },
  // basePath: isProd ? '/p_ioji' : '.',
  // assetPrefix: isProd ? '/p_ioji/' : '',
  basePath: '',
  assetPrefix: '.',
  webpack: (config) => {
    config.resolve.alias['@styles'] = './src/styles/*';
    return config;
  },
};

export default nextConfig;
