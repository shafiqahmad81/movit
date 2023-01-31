/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Basier': ['Basier Square', ],
      'Futura': ['Futura PT', ],
    },
    extend: {
      padding: {
        'p-30': '7.313rem',
      },
      
      boxShadow: {
        'header-shadow': '0px 4px 10px rgba(0, 0, 0, 0.09)',
        'box-shadow': '0px 29px 41px rgba(0, 0, 0, 0.05)',
      },
      lineHeight: {
        '19': '4.875rem',
        '11': '2.875rem',
        '12': '3.875rem',
        '5.5': '1.375rem',
      },
      letterSpacing: {
        wider: '.08em',
      },
      fontSize: {
        '7.5xl': '5.125rem',
        '4.9xl': '2.875rem',
        '2.8xl': '1.75rem',
        '2.9xl': '2rem',
        '2.6xl': '1.375rem',
      },
      colors: {
        'green': '#007DC5',
        'green-light': '#94C11F',
        'green-light-text': '#44BC00',
        'gray-dark': '#444444',
        'gray-light': 'rgba(0, 0, 0, 0.7)',
        'gray': '#EEEEEE',
        'gray-bg-light': '#C9DCE7',
        'gray-bg': '#F8F9FF',
      },
      borderRadius: {
        '2.8xl': '22px',
        'rounded-top-right': '6px 6px 0px 0px',
      },
      width: {
        '5.8/12': '48%',
      },
      height: {
        '46': '189px',
        '36': '153px',
        '27': '109px',
        '25': '100px',
      },
      screens: {
        'md-ex': '991px',
      },

    },
  },
  plugins: [],
}
