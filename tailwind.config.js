/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#f8f9fa',
        'background-secondary': '#343a40',
        'background-tertiary': '#6c757d',
        'background-card-header': 'rgba(0, 0, 0, .03)',
        'border-primary': '#6c757d',
        'text-primary': '#212529',
        'text-secondary': '#6c757d',
        'text-link': '#007bff',
        'text-link-hover': '#0056b3',
        'text-code': '#e83e8c',
        'border-card': 'rgba( 0, 0, 0,.125)',
      },
      maxWidth: {
        container: '1140px',
      },
      fontSize: {
        title: '4.5rem',
        'heading-2': '2rem',
        'heading-3': '1.75rem',
        'heading-4': '1.5rem',
        'heading-5': '1.25rem',
        xs: '0.8rem',
      },
      lineHeight: {
        heading: '1.2',
      },
    },
  },
  plugins: [],
}
