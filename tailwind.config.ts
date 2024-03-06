import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          white: '#ffffff',
        },
        light: {
          grey: '#f9f9f9',
          'grey-200': '#667085',
          black: '#1A1A1A',
        },
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
} satisfies Config;
