/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        opacityGrey: '#e5e7eb24',
      }
    },
  },
  plugins: [],
}

