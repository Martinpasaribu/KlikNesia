/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // untuk dark mode
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

      screens: {

      // Layar Hp ukuran minimum       (Potrait)
      'hp': '370px',

      // Layar Hp ukuran Umum          (Potrait)
      'hp1': '390px',

      // Layar Hp ukuran maximum       (Potrait)
      'hp2': '425px',

      // Layar Hp ukuran Minumum       (Landscape)
      'hp3': '740px',


      // Layar Tablet ukuran Minumum   (Potrait)
      'md': '768px',

      // Layar Tablet ukuran Umum      (Landscape)
      'md1': '1150px',

      // Layar Tablet ukuran maximum   (Landscape)
      'md2': '1440px',


      // Layar Laptop ukuran Minumum
      'xl': '1024px',

      // Layar Laptop ukuran Maximum
      'xl1': '1536px',

      
      // Layar PC ukuran Minumum
      'pc': '1706px',

      // Layar Tablet ukuran Medium
      'pc1': '1920px',




      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      boxShadow: {
        'main-glow': '0 1px 18px #A9C6EBFF ', 
        'sub-glow': '0 1px 2px #BCCFE7FF ', 
      },
    },
  },
  plugins: [],
};
