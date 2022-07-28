/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
    scale: {
       '200': '2.0',
      },
    },
  },
  plugins: [],
}
