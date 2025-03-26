
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bubblegum Sans"', 'sans-serif'], // Default font stack
      },
      colors: {
        'dark-yellow': '#b8860b', // Dark mustard yellow
      },
    },
  },
  plugins: [],
} satisfies Config;
