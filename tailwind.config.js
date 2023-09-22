/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        head: 'Cormorant Garamond',
        common: 'Inter',
      },
      colors: {
        primary: '#fd4242',
        secondary: '#FF6666',
        tertiary: '#FF8989',
        fourth: '#FCAEAE',
        fifth: '#FFEADD',
        'dark-bg': '#200F21',
        'dark-primary': '#d072d4',
        'dark-secondary': '#382039',
        'dark-tertiary': '#5A3D5C',
        warning: '#edac05',
        danger: '#dc2626',
        success: '#16a34a',
      },
    },
  },
  plugins: [],
};
