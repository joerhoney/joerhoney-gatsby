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
