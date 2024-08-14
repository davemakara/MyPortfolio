/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "800px",
      lg: "1080px",
      xl: "1240px",
      xxl: "1540px",
    },
    colors: {
      customBlue: "rgb(15 23 42)",
      projectSkill: "rgba(153, 153, 153, 0.2)",
      black: "#000000",
      white: "#ffffff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    extend: {
      keyframes: {
        "rotate-back-forth": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        "rotate-back-forth": "rotate-back-forth 1s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
