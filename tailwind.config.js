/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    './components/**/*.{html,js}',
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    './pages/**/*.{html,js}',
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './public/index.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'serif'],
        robotoc: ['Roboto Condensed', 'sans-serif'],
        geologica: ['Geologica', 'sans-serif'],
        sans: ['Geist', 'Roboto', 'Helvetica', 'Arial', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
      }
    },
  },
  plugins: [],
}

