import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral ink ramp (ivory → warm near-black)
        ink: {
          50: '#ece5d6',
          100: '#e4ddcf',
          200: '#d8cfbb',
          300: '#b8ad97',
          400: '#8c8474',
          500: '#5c584f',
          600: '#46433c',
          700: '#33302a',
          800: '#26241f',
          900: '#1c1b17',
        },
        // Burgundy accent (brand)
        accent: {
          50: '#f4e8e4',
          100: '#ecd6d1',
          200: '#dcb3ad',
          400: '#b0564f',
          500: '#8f3a3a',
          600: '#7a2630',
          700: '#641f28',
        },
        // Gold — used on dark surfaces (footer labels, monogram)
        gold: {
          400: '#c9966c',
          500: '#a98b4f',
          600: '#8a6d33',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.8s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
