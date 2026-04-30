/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#A64B5F',
          50: '#F3DCE2',
          100: '#E7C0CA',
          200: '#D89AAA',
          500: '#A64B5F',
          600: '#8E374A',
          700: '#6F2839'
        },
        sage: {
          DEFAULT: '#789688',
          50: '#D8E2D7',
          100: '#C2D2C6',
          600: '#5D7C6D'
        },
        ivory: '#EFE3DC',
        shell: '#E5D5CC',
        paper: '#FBF3EE',
        mist: '#D8E2D7',
        line: '#D5C2B8',
        ink: '#302526',
        muted: '#6F5E5D',
        'text-dark': '#302526',
        'muted-gray': '#6F5E5D'
      }
    }
  },
  plugins: []
}
