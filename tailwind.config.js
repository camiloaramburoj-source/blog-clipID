/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandTeal: '#297373',
        brandOrange: '#FF8552',
        brandYellow: '#E9D758',
        brandLight: '#E6E6E6',
        brandDark: '#39393A',
        brandBg: '#F8F9FA',
      },
      fontFamily: {
        title: ['Unna', 'serif'],
        sub: ['Nunito', 'sans-serif'],
        body: ['Hind', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
