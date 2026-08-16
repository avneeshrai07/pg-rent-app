/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        wine: {
          50: "#FBF3F4",
          100: "#F4E9EA",
          200: "#E3B8BC",
          400: "#C06A73",
          600: "#7A1F2B",
          700: "#58111A", // base / primary
          900: "#3D0B12",
        },
        espresso: {
          50: "#F7F5F4",
          100: "#E5E1DE",
          200: "#C7BEBB",
          400: "#8B7A77",
          600: "#5B4A47",
          700: "#2B1B1B", // base / text
          900: "#1A0F0F",
        },
        canvas: {
          paper: "#FFFFFF",
          DEFAULT: "#FAFAFA",
          sunken: "#F0EEEC",
        },
        success: "#3A7856",
        danger: "#C1443D",
        warning: "#C98A3E",

        // kept for anything still referencing the old token
        primary: "#58111A",
      },
      fontFamily: {
        display: ["Fraunces", "serif"], // headlines
        body: ["Inter", "sans-serif"], // paragraphs, UI
        mono: ["IBM Plex Mono", "monospace"], // labels, data, ledger figures
      },
    },
  },
  plugins: [],
};