/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vino: "#991B1B",
        petroleo: "#0A3D44",
        grisclaro: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
