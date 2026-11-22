/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      { source: "/play-around-projects", destination: "/projects", permanent: true },
      { source: "/play-around-projects/threejs", destination: "/projects/threejs", permanent: true },
      { source: "/skills", destination: "/about#skills", permanent: true },
    ];
  },
};

module.exports = nextConfig;
