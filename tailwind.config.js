/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '400px',
      md: '600px', // Set it to a smaller value than the default 768px
      lg: '1024px',
      xl: '1280px'
    },
    plugins: []
  }
}