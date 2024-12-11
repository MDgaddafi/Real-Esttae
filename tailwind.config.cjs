/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ED2970',
        secondary: '#404041',
        accent: '#F4F4F4',
      },
    },
  },
  plugins: [daisyui],
};
