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
        "Dark-blueish":"#2a2c38"
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
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
