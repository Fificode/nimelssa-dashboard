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
      'white': '#fffffd',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'light-grey': '#717171',
      'light-purple-bg': '#cd9cf2',
      'white-bg' : '#f6f3ff ',
      'carousel-bg': '#bbbbbb',
      'text-black': '#303030',
      'badge-peach': '#dc5353',
      'badge-purple': '#7e5bef',
      'badge-orange': '#ff7849'
     
    },
    extend: {
      keyframes: {
        scale_up_tl:{
          '0%' : { transform: 'scale(0.5)',
        'transform-origin': '0% 0%'},
'100%': {transform: 'scale(1)',
'transform-origin': '0% 0%'},
      },
     
      },
       animation: {
        
        scale_up_tl: 'scale_up_tl 0.45s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
      
    },
  },
  plugins: [
   
  ],
}

