/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/tech-store' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tech-store/' : '',
}

module.exports = nextConfig