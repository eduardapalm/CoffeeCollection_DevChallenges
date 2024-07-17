import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },

      colors: {
        p: {
          1: "#1B1D1F",
          2: "#111315",
          3: "#6F757C",
          4: "#BEE3CC",
          5: "#FEF7EE",
          6: "#F6C768",
          7: "#ED735D",
        },
      },
    },
  },
  plugins: [],
};

export default config;
