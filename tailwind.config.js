/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101820',
        paper: '#F5F7F4',
        surface: '#FFFFFF',
        line: '#DDE3DE',
        muted: '#5B6863',
        signal: {
          blue: '#2C5AA0',
          blueDark: '#1E3F73',
          orange: '#E2703A',
          green: '#3F8F6F',
        },
      },
      fontFamily: {
        display: ['"Work Sans"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
        mono: ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
