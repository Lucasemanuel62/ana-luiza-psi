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
          DEFAULT: '#3EC6C6',
          50: '#EEF6F3',
          100: '#F3F1EC',
          200: '#DFF6F5',
          300: '#BEEFEF',
          400: '#7FE2E0'
        },
        'text-dark': '#1F2937',
        'muted-gray': '#374151'
      }
    }
  },
  plugins: []
}
