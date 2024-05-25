/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Gray: "#888",
        Dark: "#222227",
        Orange: "#fe5b2c",
        Sky: "#f5f5f5",
      },
      fontSize: {
        // l: "111px",
        // m: "23px",
        // s: "18px",
      },
    },
  },
  plugins: [],
};
