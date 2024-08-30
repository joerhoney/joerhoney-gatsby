/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      skew: {
        14: "14.1deg",
      },
      rotate: {
        14: "14.1deg",
      },
    },
  },
  plugins: [],
};
