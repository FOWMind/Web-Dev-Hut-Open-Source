/* eslint-disable-next-line no-undef */
module.exports = {
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
}
