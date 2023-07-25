/** @type {import('tailwindcss').Config} */
/* eslint-disable-next-line no-undef */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-wave': 'url("/img/footer-wave.svg")',
      },
      animation: {
        'fade-in-to-bottom': 'fade-in-to-bottom 0.5s forwards',
      },
      keyframes: {
        'fade-in-to-bottom': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-15px)',
          },
          '100%': {
            opacity: 1,
            transform: 'initial',
          },
        },
      },
    },
    screens: {
      xs: '320px',
      sm: '565px',
      md: '768px',
      lg: '1024px',
      '2lg': '1140px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& *')
      addVariant('child-hover', '& *:hover')
      addVariant('direct-child', '& > *')
      addVariant('direct-child-hover', '& > *:hover')
    },
  ],
}
