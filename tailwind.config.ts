import type { Config } from 'tailwindcss';

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@headlessui/react/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f7fafc", // color claro para el texto en modo oscuro
        accent: "#4a5568",
        background: "#1a202c", // fondo oscuro para modo oscuro
        darkBox: "#2d3748", // fondo para cajas en modo oscuro
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;