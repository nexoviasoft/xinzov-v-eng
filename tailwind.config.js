/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hindSiliguri: ["var(--font-hindSiliguri)"],
        baiJamjuree: ["var(--font-baiJamjuree)", "var(--font-hindSiliguri)"],
      },
      colors: {
        // Xinzo logo palette: blue-indigo → purple gradient, orange accent
        primary: "#3730a3",
        primaryDark: "#6b21a8",
        accent: "#f97316",
      },
    },
  },
  plugins: [],
};
