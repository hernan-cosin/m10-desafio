const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  reactStrictMode: true,
  swcMinify: true,
  compiler:{
    styledComponents: true
  },
    images: {
      domains: ['dl.airtable.com'],
    },
})

module.exports = nextConfig
