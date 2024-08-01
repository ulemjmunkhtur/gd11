/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This includes all files in the src directory with the specified extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Only if you need to use DaisyUI components
  ],
}