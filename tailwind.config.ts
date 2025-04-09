import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Bubblegum Sans', 'sans-serif'], // Add Inter as primary font
        heading: ['"Poppins"', 'sans-serif'], // Modern font for headings
        playful: ['"Bubblegum Sans"', 'sans-serif'], // Keep the kid-friendly font for specific elements
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
      lineHeight: {
        'relaxed': '1.75',
        'spacious': '2',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            lineHeight: 1.75,
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
