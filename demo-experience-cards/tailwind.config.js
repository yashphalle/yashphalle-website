/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your blue theme
        body: "#EDF9FE",
        text: "#001C55",
        highlight: "#A6E1FA",
        secondary: "#7F8DAA",
        accent: "#0E6BA8",
        jacket: "#0A2472",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(10, 36, 114, 0.08)",
        "card-hover": "0 8px 30px -4px rgba(14, 107, 168, 0.15)",
      },
    },
  },
  plugins: [],
};
