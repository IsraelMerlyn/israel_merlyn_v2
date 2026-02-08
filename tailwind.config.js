/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  css: [
    '~/assets/css/main.css'
  ],
  theme: {
    extend: {
      colors: {

        navy: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
        },
        blue: {
          600: "#1B3573",
          500: "#445B84",
        },
        slate: {
          700: "#2F3156",
          600: "#565A73",
        },
        steel: {
          300: "#B4B7BC",
        },
        mist: {
          200: "#DDE0E5",
        },
        white: "#FEFEFE",

      },
      fontFamily: {

        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

    },
  },
  plugins: [],
}