/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#06b6d4',
        secondary: '#64748B',
        dark: '#475569',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
