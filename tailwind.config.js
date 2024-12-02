/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        
      colors: {
        primary: {
          DEFAULT: "#FB432C",

        },
        dark: {
          DEFAULT: "#171717",
          100: "#282828",
          200: "#5F5F5F",
          300: "#A3A3A3",
          400: "#222222",
          500: "#737373",
          600: "#5F6980",
         
        },
        white: {
          DEFAULT: "#ffffff",
          100: "#F9FAFB",
         },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'heroImg': "url('/src/public/assets/icons/Hero--banner.svg')",
      },
    },
  },
  plugins: [],
}