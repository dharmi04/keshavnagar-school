/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f8ef",
          100: "#dcebd2",
          600: "#4b7f2c",
          700: "#3a6422",
          800: "#2a4d18",
          900: "#18340f",
        },
        secondary: {
          100: "#fff3d6",
          500: "#f59e0b",
          600: "#d97706",
        },
        accent: {
          300: "#fed7aa",
          400: "#fb923c",
          500: "#ea580c",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.10)",
      },
    },
  },
  plugins: [],
};
