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
         'loop-scroll-reverse': 'loop-scroll-reverse 20s linear infinite',
         'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        'loop-scroll-reverse': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(-10%)'
          },
          '50%': {
            transform: 'translateY(-5%)'
          }
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

