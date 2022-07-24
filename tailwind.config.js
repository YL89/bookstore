/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridAutoRows: {
        book: '250px',
      },
      gridTemplateColumns: {
        'book-4': 'repeat(4, 200px)',
        'book-6': 'repeat(6, 200px)',
        'book-8': 'repeat(8, 200px)',
        'book-2': 'repeat(2, 200px)',
        'book-1': 'repeat(1, 200px)',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/,
    },
    {
      pattern: /flex-.*/,
    },
    {
      pattern: /(bottom|right|top|left)-[0-9]+/,
    },
    {
      pattern: /(w|h)-[0-9]+/,
    },
  ],
};
