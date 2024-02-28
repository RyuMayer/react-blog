import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
} satisfies Config;
