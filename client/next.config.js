/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
    ];
  },
};

module.exports = nextConfig;
