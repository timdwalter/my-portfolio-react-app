/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Next 16 only serves qualities listed here; 90 is used for the portrait.
    qualities: [75, 90],
  },
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
