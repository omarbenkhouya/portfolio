import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig = {
  images: {
    // Allow local images in /public
    domains: [],
  },
};

export default withNextIntl(nextConfig);