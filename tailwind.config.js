/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5A36',
        secondary: '#1D212D',
        white: '#ffffff',
        offWhite: '#f1f1f1',
        black: '#000000',
        shuttleGray: '#6A6D77',
        osloGray: '#80848D',
        lightGray: '#EFEFEF',
        vulcan: '#0F121B',
        shark: '#1D2028',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/students.jpg')",
        'about-us': "url('./src/assets/concept-of-unknown-things.svg')",
      },
      animation: {
        'loop-scroll': 'loop-scroll 25s linear infinite',
        'loop-reverse': 'loop-scroll 25s reverse infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
    plugins: [],
  },
};
