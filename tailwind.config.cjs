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
      }
    },
  },
  plugins: [],
}
