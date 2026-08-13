/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        primary: '#e85d26',
        'primary-dark': '#c44d1a',
        secondary: '#1a2b3c',
        'secondary-light': '#2c3e50',
        accent: '#3498db',
        surface: '#f8fafc',
      },
      boxShadow: {
        card: '0 4px 20px rgba(26, 43, 60, 0.08)',
        'card-hover': '0 8px 30px rgba(26, 43, 60, 0.14)',
      },
    },
  },
  plugins: [],
}
