import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
// import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  //OPTION
  // output: 'export',
  ...(isProd ? { output: 'export' } : {}),
  images: {
    //FIXME
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: isProd ? '/p_ioji' : '',
  //OPTION
  // assetPrefix: './',
  webpack: (config) => {
    config.resolve.alias['@styles'] = './src/styles/*';
    config.resolve.fallback = { fs: false, module: false };
    // config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    // config.resolve.alias['components'] = path.resolve(__dirname, 'src/components');
    return config;
  },
};

export default nextConfig;
