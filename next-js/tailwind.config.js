/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#151417",
        gray: {
          200: "#BBBCB7",
          300: "#F6F6F6",
          400: "#E5E5E5",
          500: "#B2ACAB",
        },
        red: {
          300: "#7B0A1C",
        },
        yellow: {
          300: "#FFB949",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)"],
      },

      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
