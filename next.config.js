/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: { unoptimized: true }, // not compatible with output: export
  basePath: '/TODO--',
  experimental: {
    mdxRs: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)


