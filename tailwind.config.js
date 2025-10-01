/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f0ff",
          100: "#ecdfff",
          500: "#7c3aed", 
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
