/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow next/image to serve our local images
    unoptimized: true,
  },
};

module.exports = nextConfig;