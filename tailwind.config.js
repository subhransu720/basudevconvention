/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#7C3AED',
        accent: '#e6e6fa',
        background: '#ffffff',
        foreground: '#171717',
        'light-purple': '#d8bfd8',
        'dark-purple': '#4b0082',
      },
    },
  },
  plugins: [],
} 