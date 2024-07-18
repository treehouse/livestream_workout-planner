/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        tomato: "tomato",
        teal: "#2dd4bf",
        green: "#37692b",
        pink: "#EF5A6F",
        magenta: "#FF00FF",
      },
    },
  },
  plugins: [],
};
