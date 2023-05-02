/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable semi */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three'])

const nextConfig = {
  experimental: {
    appDir: false,
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};

// eslint-disable-next-line comma-spacing
module.exports = nextConfig,withTM();
