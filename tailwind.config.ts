import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // This line is VITAL
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))", // Neon Pink
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        brand: ["var(--font-comfortaa)"],
      },
    },
  },
  plugins: [],
};
export default config;