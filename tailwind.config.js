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
        primary: '#087ed1',
        'primary-dark': '#0564ae',
        secondary: '#073b75',
        'secondary-light': '#0b5599',
        accent: '#36b5f0',
        surface: '#f4faff',
      },
      boxShadow: {
        card: '0 5px 22px rgba(7, 59, 117, 0.08)',
        'card-hover': '0 12px 32px rgba(7, 59, 117, 0.16)',
      },
    },
  },
  plugins: [],
}
