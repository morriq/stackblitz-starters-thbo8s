/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.ASSET_PREFIX,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
