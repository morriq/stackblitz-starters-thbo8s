/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
