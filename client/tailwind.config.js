/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#111',
      white: '#FFF',
      purple: '#6E41E2',
      green: '#27AE60',
      red: '#C7302B',
      
    },
    extend: {
      opacity: {
        48: ".48",
      },
    },
  },
  plugins: [],
};
