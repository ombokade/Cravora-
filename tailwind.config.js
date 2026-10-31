/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FAF0F2',
          100: '#F5DEE3',
          200: '#ECC1C9',
          300: '#DF98A5',
          400: '#B84A61',
          500: '#8D2639',
          600: '#7A1F30',
          700: '#641826',
          800: '#4F131E',
          900: '#390D15',
          DEFAULT: '#8D2639',
        },
        ivory: {
          50: '#FDFBF8',
          100: '#FAF6F0',
          200: '#F4EBDD',
          300: '#ECE0CF',
          400: '#E1D1BC',
          DEFAULT: '#F4EBDD',
        },
        espresso: {
          50: '#F7F6F5',
          100: '#ECEAE9',
          200: '#D4D0CE',
          300: '#A7A09D',
          400: '#6A615E',
          500: '#292321',
          600: '#221D1B',
          700: '#1B1615',
          800: '#13100E',
          900: '#0A0908',
          DEFAULT: '#292321',
        },
        champagne: {
          50: '#FDF9F4',
          100: '#F9F0E3',
          200: '#F1DFC5',
          300: '#E6CCA4',
          400: '#D6A56D',
          500: '#C69255',
          600: '#B27B3C',
          DEFAULT: '#D6A56D',
        },
        sand: {
          50: '#FAF7F3',
          100: '#F4EEE5',
          200: '#E7D9C8',
          300: '#DAC4AA',
          400: '#CAAB8A',
          DEFAULT: '#E7D9C8',
        },
        cravora: {
          burgundy: '#8D2639',
          ivory: '#F4EBDD',
          espresso: '#292321',
          champagne: '#D6A56D',
          sand: '#E7D9C8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(41, 35, 33, 0.06), 0 2px 6px -1px rgba(41, 35, 33, 0.04)',
        'card': '0 8px 30px rgba(41, 35, 33, 0.08)',
        'elevated': '0 20px 40px -10px rgba(141, 38, 57, 0.12), 0 10px 20px -5px rgba(41, 35, 33, 0.06)',
        'gold': '0 6px 20px rgba(214, 165, 109, 0.25)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
