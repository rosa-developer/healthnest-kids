
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bubblegum Sans"', 'sans-serif'], // Fun, kid-friendly font
      },
      colors: {
        'primary-purple': '#9b87f5', // Kid-friendly purple
        'primary-green': '#66cc99',  // Kid-friendly green
        'primary-orange': '#ff9966', // Kid-friendly orange
        'primary-blue': '#6699ff',   // Kid-friendly blue
        'primary-yellow': '#ffeb99', // Soft yellow background
        'primary-pink': '#ff99cc',   // Kid-friendly pink
        'dark-yellow': '#b8860b',    // Dark mustard yellow
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'kid': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'kid-hover': '0 6px 12px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
