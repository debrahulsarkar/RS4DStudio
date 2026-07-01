import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./sections/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { studio: { bg: "#090909", card: "#141414", accent: "#ff6b00", text: "#ffffff", muted: "#a1a1aa" } },
      fontFamily: { sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"] },
      boxShadow: { glow: "0 0 42px rgba(255,107,0,.22)", card: "0 24px 80px rgba(0,0,0,.45)" },
      keyframes: {
        float: { "0%,100%": { transform: "translate3d(0,0,0) scale(1)" }, "50%": { transform: "translate3d(20px,-24px,0) scale(1.04)" } },
        scan: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100%)" } }
      },
      animation: { float: "float 8s ease-in-out infinite", scan: "scan 5s linear infinite" }
    }
  },
  plugins: []
};

export default config;
