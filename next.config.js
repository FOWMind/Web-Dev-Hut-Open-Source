/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.githubusercontent.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '*.imgur.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '*.wikimedia.org',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
