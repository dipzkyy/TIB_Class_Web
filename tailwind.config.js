/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#0EA5E9',
          light: '#38BDF8',
        },
        accent: {
          DEFAULT: '#14B8A6',
          dark: '#0D9488',
          light: '#2DD4BF',
        },
        background: '#F8FAFC',
        surface: '#FFFFFF',
        dark: '#0F172A',
        navy: {
          DEFAULT: '#0F172A',
          dark: '#0B1120',
          deep: '#060B14',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.06)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.08)',
        'elevated': '0 20px 40px -15px rgba(15, 23, 42, 0.12)',
        'projector': '0 0 0 1px rgba(255,255,255,0.1), 0 20px 40px -10px rgba(0,0,0,0.5)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}