/** @type {import('next').NextConfig} */
const withImages = require('next-images');
module.exports = withImages();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
