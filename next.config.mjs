/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Uyarı: Bu ayar build sırasında ESLint hatalarını görmezden gelir
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;