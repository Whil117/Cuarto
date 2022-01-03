const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
})