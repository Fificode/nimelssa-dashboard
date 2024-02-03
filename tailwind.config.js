/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
          "./*.html",
          "./**/*.js",
          "./*.js",
          "./**/*.vue",
          "./*.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'light-grey': '#717171',
      'light-purple-bg': '#cd9cf2',
      'white-bg' : '#f6f3ff ',
      'carousel-bg': '#bbbbbb',
      'text-black': '#303030'
     
    },
    extend: {},
  },
  plugins: [],
}

