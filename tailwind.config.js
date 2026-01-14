/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- BURAYI EKLE ---
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite', // 6 saniyelik yavaş döngü
      },
      // -------------------
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3B82F6", // Elektrik Mavisi
          dark: "#1D4ED8",
        },
        secondary: "#8B5CF6", // Neon Mor
        dark: {
          900: "#0B0F19", // Ana zemin
          800: "#111827", // Kart zemini
          700: "#1F2937", // Border/Çizgi
        }
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      // 🔥 İŞTE O EKLEDİĞİMİZ ANİMASYON KODLARI BURADA:
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};