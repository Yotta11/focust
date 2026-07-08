/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#060B16',
        navy: {
          950: '#050A15',
          900: '#0A1330',
          800: '#0F1B47',
          700: '#152563',
          600: '#1B3A8A',
        },
        sky: {
          accent: '#3FD0F2',
          soft: '#8FE3F7',
        },
        sand: '#E9E4D8',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(120% 120% at 15% 0%, #1B3A8A 0%, #0A1330 45%, #050A15 100%)',
      },
    },
  },
  plugins: [],
}
