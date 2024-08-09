/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'college-bg': "url('/src/assets/Group 8.svg')",
      },
    },
  },
  plugins: [],
}
