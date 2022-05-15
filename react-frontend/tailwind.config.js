module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '2%, 18%': {
            transform: 'translate3d(-1px, 0, 0)',
          },

          '4%, 16%': {
            transform: 'translate3d(2px, 0, 0)',
          },

          '6%, 10%, 14%': {
            transform: 'translate3d(-4px, 0, 0)',
          },

          '8%, 12%': {
            transform: 'translate3d(4px, 0, 0)',
          },

          '20%, 100%': {
            transform: 'translate3d(0, 0, 0)',
          }
        },

        myspin: {
          '100%': { transform: 'rotate(360.0deg)' },
        },
      },
      animation: {
        clock: 'myspin 7s linear infinite',
        shake: 'shake 5s ease-out infinite'
      },
    },
  },
  plugins: [],
}
