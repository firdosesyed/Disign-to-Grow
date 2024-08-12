/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [ 
    function({ addUtilities }) {
      const newUtilities ={
        ".noscrollbar::-webkit-scrollbar":{
          display: "none",
        },
        ".no-scrollbar":{
          "-mss-overflow-style": "none",
          'scrollbar-width': "none",
        },
      };
      addUtilities(newUtilities);
    }
  ],
  
};

