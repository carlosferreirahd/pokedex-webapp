/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        normal: {
          DEFAULT: '#A8A77A',
          lighter: '#bebd98',
        },
        fire: {
          DEFAULT: '#EE8130',
          lighter: '#f6bc7b',
        },
        water: {
          DEFAULT: '#6390F0',
          lighter: '#99b9f7',
        },
        electric: {
          DEFAULT: '#F7D02C',
          lighter: '#fae04a',
        },
        grass: {
          DEFAULT: '#7AC74C',
          lighter: '#a0db7b',
        },
        ice: {
          DEFAULT: '#96D9D6',
          lighter: '#bae7e5',
        },
        fighting: {
          DEFAULT: '#C22E28',
          lighter: '#f7adaa',
        },
        poison: {
          DEFAULT: '#A33EA1',
          lighter: '#ebbaed'
        },
        ground: {
          DEFAULT: '#E2BF65',
          lighter: '#ecd89b',
        },
        flying: {
          DEFAULT: '#A98FF3',
          lighter: '#c7b9f9',
        },
        psychic: {
          DEFAULT: '#F95587',
          lighter: '#ffa2b9',
        },
        bug: {
          DEFAULT: '#A6B91A',
          lighter: '#e1ed69',
        },
        rock: {
          DEFAULT: '#B6A136',
          lighter: '#d7ce6d',
        },
        ghost: {
          DEFAULT: '#735797',
          lighter: '#d1c4e3',
        },
        dragon: {
          DEFAULT: '#6F35FC',
          lighter: '#bbafff',
        },
        dark: {
          DEFAULT: '#705746',
          lighter: '#b9a98b',
        },
        steel: {
          DEFAULT: '#B7B7CE',
          lighter: '#c7c8da',
        },
        fairy: {
          DEFAULT: '#D685AD',
          lighter: '#e8b9d2',
        },
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
