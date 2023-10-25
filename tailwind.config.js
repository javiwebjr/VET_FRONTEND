/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'blue-vet': '#566DB3',
        'pink-vet': '#D24FB0',
        'violet-vet': '#932AFF',
        'floral-violet': '#C285FF',
        'green-success': '#47C601'
      }
    },
  },
  plugins: [],
}

