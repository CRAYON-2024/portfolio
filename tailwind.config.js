/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#f4f6ff',
        primary: '#0DB760',
        secondary: '#323433',
        gray: '#ABB2BF'
      }
    }
  },
  plugins: []
};
