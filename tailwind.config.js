/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
  ],
  plugins: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2e8b57',
        secondary: '#f8f8f8',
        accent: '#3cb371',
        dark: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Poppins', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideDown: 'slideDown 0.3s ease-out',
      }
    }
  }
}

