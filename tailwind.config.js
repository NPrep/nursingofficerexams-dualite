// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#4da3ff', // Primary Brand Color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#1e3a8a', // Navy Accent
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              color: theme('colors.gray.800'),
              fontWeight: '600',
              marginTop: '1.5em',
            },
            'ul > li::marker': {
              color: theme('colors.brand.500'),
            },
            a: {
              color: theme('colors.brand.600'),
              '&:hover': {
                color: theme('colors.brand.800'),
              },
            },
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
