import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glint: {
          // Primary Backgrounds
          ivory: "#FDFBF7",
          cream: "#F7F5F0",
          beige: "#EAE7E1",
          // Text
          charcoal: "#222222",
          black: "#000000",
          // Accents
          gold: "#C8B273",
          brown: "#8B7355",
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        super: "0.35em",
      },
      boxShadow: {
        luxury: "0 10px 40px rgba(0, 0, 0, 0.03)",
        drawer: "-10px 0 40px rgba(0, 0, 0, 0.04)",
      }
    },
  },
  plugins: [],
};
export default config;
