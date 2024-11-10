/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#021e34",
        keywords: "#c084fc",
        properties: "#fff",
        methods: "#fce96a",
        strings: "#a4cafe",
        punctuations: "#d1d5db",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "10%, 20%": {
            transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
          },
          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },
          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
      animation: {
        tada: "tada 1s ease-in-out 1",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
