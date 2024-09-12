/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg0: "var(--bg0)",
        bg1: "var(--bg1)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",
        bg4: "var(--bg4)",
        acc: "var(--acc)",
        fg4: "var(--fg4)",
        fg3: "var(--fg3)",
        fg2: "var(--fg2)",
        fg1: "var(--fg1)",
        fg0: "var(--fg0)",
      },
      padding: {
        "1/2": "50%",
        "1/4": "25%",
        "1/8": "12.5%",
        "3/4": "75%",
        "7/8": "87.5%",
        "tri": "var(--triangle)",
        "tri1/2": "calc(var(--triangle) / 2)",
        "tri1/4": "calc(var(--triangle) / 4)",
        "tri1/8": "calc(var(--triangle) / 8)",
        "tri3/4": "calc(var(--triangle) * 3 / 4)",
        "tri7/8": "calc(var(--triangle) * 7 / 8)",
      },
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
