/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': {
          'primary': '#333',
          'secondary': '#666',
          'background': '#fff',
        },
        'dark': {
          'primary': '#ccc',
          'secondary': '#999',
          'background': '#000',
        },
      },
    },
  },
  plugins: [],
}

