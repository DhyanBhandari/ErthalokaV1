/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'accent-green': '#4ADE80',
        'accent-blue': '#60A5FA',
        'accent-purple': '#C084FC',
        'accent-yellow': '#FACC15',
        'gray-950': '#0A0A0A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
