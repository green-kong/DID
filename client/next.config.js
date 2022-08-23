/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['localhost'],
  },

  async redirects() {
    return [
      {
        source: '/dev/appInfo',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
