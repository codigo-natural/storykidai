import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '10px 14px 39px 0px rgba(255, 111, 0, 1)',
        'inner-custom': 'inset 0 0 20px 10px rgba(255, 255, 255, 0.5)',
      },
      colors: {
        //background: '#CFD8DC',
        backmistic: '#7E57C2',
        limon: '#C0E218',
        secondaryrose: '#FF80AB',
        azulnocturno: '#37474F',
        halloweenbg: '#1b1b1b',
        hallowennorange: '#ff6f00',
        halloweenPurple: '#880e4f',
        gradient: 'linear-gradient(135deg, #FF6F00, #7E57C2, #FF80AB)'
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            primary: {
            },
          },
        },
        dark: {
          // ...
          colors: {},
        },
        // ... custom themes
      },
    }),

  ],
};
export default config;
