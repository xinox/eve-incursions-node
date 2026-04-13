/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'if-function'],
  },
};

module.exports = nextConfig;
