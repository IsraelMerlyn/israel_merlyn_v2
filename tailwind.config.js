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
        // Tu paleta personalizada
        navy: {
          900: "#0f172a", // Antes era #09124D. Ahora es un "Slate 900" (Elegante, profesional)
        800: "#1e293b", // Antes era #0C1751. Ahora es "Slate 800" (Para tarjetas)
        700: "#334155",
        },
        blue: {
          600: "#1B3573", // Subtítulos / Acentos
          500: "#445B84",
        },
        slate: {
          700: "#2F3156", // Párrafos oscuros
          600: "#565A73", // Párrafos medios
        },
        steel: {
          300: "#B4B7BC", // Detalles
        },
        mist: {
          200: "#DDE0E5", // Textos secundarios en dark mode
        },
        white: "#FEFEFE",
      
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