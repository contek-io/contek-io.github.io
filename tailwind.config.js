/** @type {import('tailwindcss').Config} */
// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*"],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: true
};