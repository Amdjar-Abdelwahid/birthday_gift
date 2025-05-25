/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff0f6',
          100: '#ffe5f0',
          200: '#ffc2d9',
          300: '#ff9ec0',
          400: '#ff6b9f',
          500: '#FF69B4', // primary
          600: '#e14c8e',
          700: '#bd386f',
          800: '#9c2e55',
          900: '#802845',
        },
        purple: {
          50: '#f6f4ff',
          100: '#edebff',
          200: '#dbd5ff',
          300: '#c1b3ff',
          400: '#a990ff',
          500: '#9370DB', // secondary
          600: '#7c4dff',
          700: '#6e39ef',
          800: '#5c2fd3',
          900: '#4d27ab',
        },
        yellow: {
          400: '#FFD700', // accent
          500: '#eabe00',
        },
      },
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};