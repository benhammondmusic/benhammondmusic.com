/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
    extend: {
      colors: {
        'bhm-blue': {  DEFAULT: '#336699',  '50': '#A3C2E0',  '100': '#94B8DB',  '200': '#75A3D1',  '300': '#578FC7',  '400': '#3D7AB8',  '500': '#336699',  '600': '#254A6F',  '700': '#172E45',  '800': '#09121B',  '900': '#000000'},
        'bhm-gray': {
          DEFAULT: '#343A40',
          '50': '#B8BFC5',
          '100': '#ADB4BC',
          '200': '#96A0AA',
          '300': '#808C98',
          '400': '#6B7784',
          '500': '#59636D',
          '600': '#464E57',
          '700': '#343A40',
          '800': '#1B1E21',
          '900': '#020202'
        },
        'bhm-sky': {  DEFAULT: '#8899BB',  '50': '#E3E7EF',  '100': '#D6DCE8',  '200': '#BCC6D9',  '300': '#A2AFCA',  '400': '#8899BB',  '500': '#647AA7',  '600': '#4D6086',  '700': '#384662',  '800': '#242D3F',  '900': '#0F131B'},
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
