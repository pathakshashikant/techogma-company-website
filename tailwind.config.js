/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        b612: ["B612", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
