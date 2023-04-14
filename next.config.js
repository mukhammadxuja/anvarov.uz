const withTM = require('next-transpile-modules')(['three']);
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = withTM(nextConfig);
