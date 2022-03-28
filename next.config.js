/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    swcMinify: true,
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },
}

module.exports = nextConfig
