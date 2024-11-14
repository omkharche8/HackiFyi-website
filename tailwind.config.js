/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Clash: ["Clash", "sans-serif"],
      SourceCodePro: ["SourceCodePro", "Clash"]
    },
    extend: {
      boxShadow: {
        'circle': '0 0 50px rgba(220, 20, 60, 0.796), inset 0 0 30px rgba(220, 20, 60, 0.796)',
        'border_effect' : 'rgb(178, 19, 53) 10px 10px;'
      },
      keyframes: {
        marquee_left: {
          '0%': { transform: 'translateX(0)' },
          '50%' : { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)' },
        },
        marquee_right: {
          '0%': { transform: 'translateX(-100%)' },
          '50%' : { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(-100%)' },
        },
        
      },
      animation: {
        marquee_left: 'marquee_left 80s linear infinite',
        marquee_right: 'marquee_right 80s linear infinite',
      }
    }
  },
  plugins: [
    require('tailwindcss-dotted-background'),
  ],
}

