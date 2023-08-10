/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // images: { unoptimized: true }, // not compatible with output: export
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


// amp, analyticsId, assetPrefix, basePath, cleanDistDir, compiler, compress, configOrigin, crossOrigin, devIndicators, distDir, env, eslint, excludeDefaultMomentLocales, experimental, exportPathMap, generateBuildId, generateEtags, headers, httpAgentOptions, i18n, images, modularizeImports, onDemandEntries, optimizeFonts, output, outputFileTracing, pageExtensions, poweredByHeader, productionBrowserSourceMaps, publicRuntimeConfig, reactStrictMode, redirects, rewrites, sassOptions, serverRuntimeConfig, skipMiddlewareUrlNormalize, skipTrailingSlashRedirect, staticPageGenerationTimeout, swcMinify, target, trailingSlash, transpilePackages, typescript, useFileSystemPublicRoutes, webpack
