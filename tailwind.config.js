/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {},
    screens: {
      sm: '640px',

      md: '768px',
      max_md: { max: '767px' },

      lg: '1024px',

      xl: '1280px',

      '1xl': '1440px',

      '2xl': '1800px'
    }
  },
  plugins: []
}
