/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(20, 210, 195, 0.5)', // Ganti nilai rgba dengan warna yang diinginkan
      },
      animation: {
        "loop-scroll": "loop-scroll 25s linear infinite",
         'loop-scroll-reverse': 'loop-scroll-reverse 20s linear infinite',
         'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        'loop-scroll-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0%)' }
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

