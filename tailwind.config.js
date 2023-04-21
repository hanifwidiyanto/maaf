/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla-extralight': ['karla-extralight', 'sans-serif'],
        'karla-extralightitalic': ['karla-extralightitalic', 'sans-serif'],
        'karla-light': ['karla-light', 'sans-serif'],
        'karla-lightitalic': ['karla-lightitalic', 'sans-serif'],
        'karla': ['karla-regular', 'sans-serif'],
        'karla-italic': ['karla-italic', 'sans-serif'],
        'karla-medium': ['karla-medium', 'sans-serif'],
        'karla-mediumitalic': ['karla-mediumitalic', 'sans-serif'],
        'karla-semibold': ['karla-semibold', 'sans-serif'],
        'karla-semibolditalic': ['karla-semibolditalic', 'sans-serif'],
        'karla-bold': ['karla-bold', 'sans-serif'],
        'karla-bolditalic': ['karla-bolditalic', 'sans-serif'],
        'karla-extrabold': ['karla-extrabold', 'sans-serif'],
        'karla-extrabolditalic': ['karla-extrabolditalic', 'sans-serif']
      },
    },
  },
  plugins: [],
}