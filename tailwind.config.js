/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Add this line
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
