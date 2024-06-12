/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "8p": "18%",
        "6p" : "6%",
      },
      colors: {
        input: "rgba(22, 22, 22, 0.7)",
        netflix: "#e50914",
      },
    },
  },
  plugins: [],
};
