/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#215415',
        'primary-dark': '#1A4010',
        'primary-light': '#2A6B1A',
        secondary: '#F59E0B',
        'secondary-dark': '#D97706',
        accent: '#DC2626',
        background: '#ffffff',
        'neutral-dark': '#374151',
        'neutral-light': '#F3F4F6',
      },
    },
  },
  plugins: [],
}