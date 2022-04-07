module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'all': '0',
      
      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '547px',
      // => @media (min-width: 547px) { ... }
      'lg1': '769px',
      
      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1680px) { ... }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      normal: '0',
      wider: '.15em',
      widest: '.25em',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    fontSize: {
      'xs': '.5rem',
      'sm': '.7rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      colors: {
        gray: {
          100: "#f0f5f8",
        },
        blue: {
          450: "#3491f1"
        },
        red: {
          300: "#FF8080",
          450: "#FF4D4D",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
