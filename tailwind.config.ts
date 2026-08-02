import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // پالت رنگی پروژه: مشکی عمیق + نیوی تیره + آبی الکتریکی + بنفش درخشان
        ink: {
          DEFAULT: "#05070d", // Deep Black
          900: "#070a12",
          800: "#0b0f1a",
          700: "#0f1424",
        },
        navy: {
          DEFAULT: "#0e1630", // Dark Navy
          light: "#141d3c",
        },
        electric: {
          DEFAULT: "#3b82f6",
          light: "#60a5fa",
          glow: "#2563eb",
        },
        violet: {
          DEFAULT: "#8b5cf6",
          glow: "#a855f7",
        },
        mist: "#c7cbdb", // Soft Gray text
        paper: "#f5f6fa", // White text
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(168,85,247,0.16), transparent 40%), radial-gradient(circle at 50% 100%, rgba(59,130,246,0.10), transparent 50%)",
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(59,130,246,0.45)",
        "glow-violet": "0 0 40px -8px rgba(168,85,247,0.45)",
        glass: "0 8px 32px 0 rgba(0,0,0,0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
