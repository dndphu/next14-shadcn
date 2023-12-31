/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      // use: ["@svgr/webpack"],
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },
};
