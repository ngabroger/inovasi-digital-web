/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 25s linear infinite",
         'loop-scroll-reverse': 'loop-scroll-reverse 20s linear infinite'
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
        'loop-scroll-reverse': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' }
        }
        
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

