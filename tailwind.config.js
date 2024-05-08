/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // Aquí se activa el modo oscuro
  theme: {
    extend: {
      colors: {
        primary: {
          '50':  '#fef2f2',
          '100': '#fee2e2',
          '200': '#fecaca',
          '300': '#fca5a5',
          '400': '#f87171',
          '500': '#ef4444',
          '600': '#dc2626',
          '700': '#b91c1c',
          '800': '#991b1b',
          '900': '#7f1d1d',
          '950': '#450a0a',
          '1000':'#FF0004'
          
        }
      },
      fontFamily: {
        'body': [
          'Nunito Sans', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        'sans': [
          'Nunito Sans', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ]
      }
    },
  },
  plugins: [],
}
