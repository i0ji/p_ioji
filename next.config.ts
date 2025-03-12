import type { NextConfig } from 'next';

//LATER
//OPTION
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'p_ioji';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    //FIXME
    unoptimized: false,
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  webpack: (config) => {
    config.resolve.alias['@styles'] = './src/styles/*';
    return config;
  },
};

export default nextConfig;
