/** @type {import('tailwindcss').Config} */
module.exports = {
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
        // Tu paleta personalizada
        navy: {
          900: "#09124D", // Fondo principal
          800: "#0C1751", // Fondo secundario / Tarjetas
        },
        blue: {
          600: "#1B3573", // Acento principal
          500: "#445B84", // Acento secundario
        },
        slate: {
          700: "#2F3156", // Bordes / Separadores
          600: "#565A73", // Texto secundario oscuro
        },
        steel: {
          300: "#B4B7BC", // Iconos inactivos / Detalles
        },
        mist: {
          200: "#DDE0E5", // Texto secundario claro
        },
        white: "#FEFEFE", // Texto principal
      },
      fontFamily: {
        // Sugerencia: Define una fuente técnica y una de lectura
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}