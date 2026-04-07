/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "720px",
        xl: "880px",
      },
      padding: '2rem',
    },

    extend: {
      // 🌀 Consistent rounding system
      borderRadius: {
        none: '0',
        sm: 'calc(var(--radius) - 6px)',
        md: 'calc(var(--radius) - 3px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
        full: '9999px',
      },

      // 🎨 Color palette — cinematic dark
      colors: {
        'light-theme': '#e8e8e8',
        'primary-light': '#ff1a1a',
        'primary-hover-light': '#cc0000',

        'dark-theme': '#0a0a0a',
        'primary-dark': '#ff1a1a',
        'primary-hover-dark': '#ff4444',

        n200: '#e8e8e8',
        n500: '#888888',
        n700: '#111111',
        n900: '#0a0a0a',
      },

      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },

      letterSpacing: {
        widest: '0.2em',
        display: '0.15em',
      },

      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)',
      },
    },
  },

  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}
