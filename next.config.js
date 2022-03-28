/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    swcMinify: true,
    reactRemoveProperties: true,
  },
}

module.exports = nextConfig
