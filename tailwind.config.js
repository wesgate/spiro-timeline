/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      black: '#000000',
      navy: '#1B2D3B',
      red: '#5E0A27',
      orange: '#F79653',
      yellow: '#FFD393',
      white: '#FFFFFF'
    },
    fill: {
      black: '#000000',
      navy: '#1B2D3B',
      red: '#5E0A27',
      orange: '#F79653',
      yellow: '#FFD393'
    },
    backgroundColor: {
      white: '#FFFFFF',
      navy: '#1B2D3B',
      red: '#5E0A27',
      orange: '#F79653',
      yellow: '#FFD393',
      black: '#000000'
    },
    textColor: {
      black: '#000000',
      navy: '#1B2D3B',
      red: '#5E0A27',
      orange: '#F79653',
      yellow: '#FFD393',
      white: '#FFFFFF'
    },
    borderColor: {
      black: '#000000',
      navy: '#1B2D3B',
      red: '#5E0A27',
      orange: '#F79653',
      yellow: '#FFD393',
      gray: '#EEEEEE'
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
     '20': '20px'
    },
    opacity: {
      '0': '0',
     '25': '.25',
     '50': '.5',
     '75': '.75',
     '10': '.1',
     '20': '.2',
     '30': '.3',
     '40': '.4',
     '50': '.5',
     '60': '.6',
     '70': '.7',
     '80': '.8',
     '90': '.9',
     '100': '1',
    },
    zIndex: {
      '-1': -1,
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      'auto': 'auto'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
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
      fontFamily: {
        sans: ['Roboto Condensed', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [
  ]
}