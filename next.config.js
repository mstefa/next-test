/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  basePath: 'https://mstefa.github.io/next-test/',
  images: { unoptimized: true }, // not compatible with output: export
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


