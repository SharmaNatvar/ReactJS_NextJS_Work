/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '992px',
      'xl': '1240px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        "light-blue" : "#227fb4",
        "light-gray" : "#9ca3af",
      }
    },
  },
  plugins: [],
}

