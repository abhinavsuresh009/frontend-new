const withMT = require("@material-tailwind/react/utils/withMT");
 /** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
  },
  plugins: [],
});

// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       colors:{
//         "dark-purple": "#081A51",
//         'light-white': 'rgba(255,255,255,0.18)'
//       }
//     },
//   },
//   plugins: [],
// }