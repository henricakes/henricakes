/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        m_xs: "350px",
        m_md: "375px",
        m_lg: "425px",
        "3xl": "1600px",
        "4k": "2560px",
      },
      colors: {
        licorice: "#16110",
        obsidian: "#08100C",
        smoke: "#23262A",
        charcoal: "#21242A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
