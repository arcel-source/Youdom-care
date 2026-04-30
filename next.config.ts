import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      // Ancienne URL → nouvelle URL canonique pour le SEO et la cohérence
      {
        source: "/services/maladies-neurodegeneratives",
        destination: "/services/alzheimer-parkinson",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
