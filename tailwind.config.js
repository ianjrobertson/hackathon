const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        white: "#F4F4F9", // Corrected hex format
        teal: "#B8DBD9",  // Corrected hex format
        "white-gray": "#DFE0E2", // Corrected hex format
        "light-gray": "#586F7C", // Corrected hex format
        "dark-gray": "#2F4550",  // Corrected hex format
      },
    },
  },
  plugins: [],
};