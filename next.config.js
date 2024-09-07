const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/en/home",
        permanent: true,
      },
      {
        source: "/vi",
        destination: "/vi/home",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "th.bing.com",
      },
      {
        protocol: "https",
        hostname: "hoanghamobile.com",
      },
      {
        protocol: "http",
        hostname: "localhost:4324",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
