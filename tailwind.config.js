/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
    "./app.vue",
    "./error.vue",
    "./app/composable/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Azul eléctrico
          hover: "#1D4ED8"
        },
        navy: {
          900: "#0A0F1E", // Fondo oscuro profundo
          800: "#111827", // Superficie para tarjetas/contenedores
          700: "#1F2937", // Bordes
          600: "#374151"
        },
        slate: {
          700: "#334155",
          600: "#475569",
          500: "#64748B" // Texto atenuado (text-muted)
        },
        steel: {
          300: "#D1D5DB"
        },
        mist: {
          200: "#E5E7EB"
        },
        text: {
          primary: "#F1F5F9",
          muted: "#64748B"
        },
        accent: {
          cyan: "#06B6D4",
          violet: "#8B5CF6"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(37, 99, 235, 0.15)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.15)',
        'glow-violet': '0 0 20px rgba(139, 92, 246, 0.15)',
        'glow-primary': '0 0 30px rgba(37, 99, 235, 0.25)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}