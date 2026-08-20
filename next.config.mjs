/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Instagram bio linki — tıklama ölçümü.
  // /bio, OCS Studio'nun sayacından geçip buraya UTM etiketleriyle geri döner.
  // Amaç "Instagram kaç ziyaretçi getirdi" sorusunu ölçebilmek; doğrudan ana
  // sayfaya link verilirse o bilgi hiç oluşmuyor.
  // permanent: false BİLEREK — kalıcı (308) yönlendirmeyi tarayıcı süresiz
  // önbelleğe alır ve hedefi sonradan değiştirmek imkânsızlaşır.
  async redirects() {
    return [
      {
        source: "/bio",
        destination: "https://ocscreativestudio.up.railway.app/bio",
        permanent: false,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
