import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-primary": "#D2D1D6",
        white: "#FFF",
        "gray-dark": "#B9BABE",
        "gray-light": "#9E9DA8",
        "yellow-primary": "#FFB700",
        "green-primary": "#67B044",
        "red-primary": "#F94545",
        dark: "#252B35",
        light: "#f6f6f6",
        "dark-secondary": "#292E39",
        "dark-primary": "#171C28",
        "light-primary": "#eee",
        "light-secondary": "#fafafd",
        "black-primary": "#1A162E",
      },
      fontFamily: {
        custom: ["Gordita", "sans-serif"],
      },
      backgroundColor: {
        dark: "#252B35",
        light: "#f6f6f6",
        "dark-secondary": "#292E39",
        "dark-primary": "#171C28",
        "light-primary": "#eee",
        "light-secondary": "#fafafd",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        "black-primary": "#1A162E",
        "gray-dark": "#B9BABE",
        "gray-light": "#9E9DA8",
      },
    },
  },
  plugins: [],
};
export default config;
