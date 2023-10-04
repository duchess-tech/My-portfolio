/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx}"],

  theme: {
    colors: {
      twitterblue: "rgb(29,155,240)",
      navyblue: "#1f2937",
      white: "#ffffff",
      ash: "#adaf9b",
      black: "#000000"
    },
    extend: {
      // screens: { "sm": { "max": "640px" } }
    },
  },
  plugins: [],
}

