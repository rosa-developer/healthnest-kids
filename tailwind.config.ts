import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Bubblegum Sans', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
        playful: ['"Bubblegum Sans"', 'sans-serif'],
        display: ['"Fredoka One"', 'cursive'], // New display font for headings
      },
      colors: {
        // Enhanced color palette with better contrast and accessibility
        'primary-purple': '#8b5cf6', // More vibrant purple
        'primary-green': '#10b981',  // Better green
        'primary-orange': '#f59e0b', // Better orange
        'primary-blue': '#3b82f6',   // Better blue
        'primary-yellow': '#fef3c7', // Softer yellow background
        'primary-pink': '#ec4899',   // Better pink
        'dark-yellow': '#d97706',    // Better dark yellow
        
        // New semantic colors
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
        'info': '#3b82f6',
        
        // Enhanced gradients
        'gradient-primary': 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #ec4899 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #10b981 0%, #f59e0b 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
        'gradient-cool': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        
        // Glassmorphism colors
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(0, 0, 0, 0.1)',
        'glass-purple': 'rgba(139, 92, 246, 0.1)',
        'glass-blue': 'rgba(59, 130, 246, 0.1)',
        'glass-pink': 'rgba(236, 72, 153, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'kid': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'kid-hover': '0 6px 12px rgba(0, 0, 0, 0.15)',
        'kid-lg': '0 8px 16px rgba(0, 0, 0, 0.12)',
        'kid-xl': '0 12px 24px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.3)',
        'inner-glow': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      lineHeight: {
        'relaxed': '1.75',
        'spacious': '2',
        'tight': '1.2',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            lineHeight: 1.75,
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} satisfies Config;
