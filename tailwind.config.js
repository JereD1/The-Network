/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#262626',
        'bg-gray' : '#171717',
    },
  },
},
  variants: {},
  plugins: [],
}