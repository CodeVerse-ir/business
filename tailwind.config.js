/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: "class",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ], theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      spacing: {
        "25": "6.25rem",
        "30": "7.5rem",
        "50": "12.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem"
        }
      },
      backgroundImage: {
        "home-mobile": "url(/image/background/business.jpg)",
        "home-desktop": "url(/image/background/business.jpg)",
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('child', '&> *');
      addVariant('child-hover', '&> *:hover');
    })
  ],
}

