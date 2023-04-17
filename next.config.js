const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
}) ;

module.exports = withPWA({
  reactStrictMode: true ,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'woong-do.kro.kr',
        port: '',
        pathname: '/api/dknews_jpg/**',
      },
    ],
  },
}) ;
