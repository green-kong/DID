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
      {
        source: '/user/connections',
        destination: '/',
        permanent: true,
      },
      {
        source: '/user/myProfile',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
