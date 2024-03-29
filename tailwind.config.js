/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          fontFamily: "Courier New, sans-serif",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          fontFamily: "Courier New, sans-serif",
        },
      },
    ],
  },
}
