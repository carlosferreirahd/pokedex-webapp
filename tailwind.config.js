/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bug: "#C6D16E",
        dark: "#49392F",
        electric: "#A1871F",
        fairy: "#9B6470",
        dragon: "#4924A1",
        fighting: "#7D1F1A",
        fire: "#9C531F",
        flying: "#C6B7F5",
        ghost: "#493963",
        grass: "#4E8234",
        ground: "#927D44",
        ice: "#BCE6E6",
        normal: "#C6C6A7",
        poison: "#682A68",
        psychic: "#FA92B2",
        rock: "#786824",
        steel: "#D1D1E0",
        water: "#9DB7F5"
      },
    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [require("daisyui")],
}
