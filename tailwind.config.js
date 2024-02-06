/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B3844",
        secondary: "#202C36",
        placeholder: "#848484",
      },
    },
  },
  plugins: [],
};
