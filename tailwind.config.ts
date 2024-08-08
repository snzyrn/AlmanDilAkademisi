import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#37352F",
        background: "#F0F0F0",
        yellow: "#FFECBB",
        pink: "#FFE0E0",
        red: "#DE2121",
        green: "#4EAF4E",
        light: "#F1F1F1",
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 40s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 7))",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
