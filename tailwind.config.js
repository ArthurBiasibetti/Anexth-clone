/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.tsx',
    './src/pages/**/*.{jsx,tsx}',
    './src/components/**/*.{jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#2388EC',
        main: '#007DFA',
        gray: '#6E7E9D',
        'gray-100': '#E6EBF2',
        'red-error': '#EF5555',
        'dark-blue': '#0060BF',
        'ligh-blue': '#34D7ED',
        'ligth-blue-400': '#30ADCA',
        'ligh-gray': '#C8D5E7',
        'blue-text': '#0082F3',
        'blue-disabled': '#96C8FA',
        'warning-text': '#FFAA00',
      },
    },
    boxShadow: {
      highlight: '2px 4px 22px 4px rgba(0, 0, 0, 0.25)',
      input: '2px 2px 6px rgba(0, 0, 0, 0.25)',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
