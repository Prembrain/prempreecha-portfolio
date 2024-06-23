/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: 'class', // Enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#00000017", //boxshadow-gray
          2: "#2d2e32", //logo
          3: "#f9f9f9", //background-color-white
          4: "#767676", //gray
          5: "#1C1C1C", //bg-black
          
        },
        n: {
          1: "#008cff", //blue
          2: "#ECF1F0", //bg-gray-navlink
          3: "#fff", //bg-darkmode
          4: "#222", //bg-whitemode
        },
      },
       boxShadow: {
        'boxshadowL': '0 4px 6px -1px rgba(255,255,255,0.6)',
        'mdTop': '0 -4px 6px -1px rgba(0, 0, 0, 0.09)',
        'darkmdTop': '0 -4px 6px -4px rgba(255,255,255,0.6)',
        'circleL': '0 0px 10px 0 rgba(0,0,0,0.1)',
        'circleW': '0 0px 10px 0 rgba(255,255,255,0.6)',
       },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        rubik: ["var(--font-rubik)"],
        roboto: ["var(--font-roboto)"],
        poppins: ["var(--font-Poppins)"],
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      screens: {
        'xs': '340px',
        'xs1': '370px',
        'xs2': '400px',
        'xs3': '550px',
        'h640': { 'raw': '(max-height: 640px)' }, 
      },
      animation: {
        'spin-360': 'spin-360 20s linear infinite',
      },
      keyframes: {
        'spin-360': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        ':root': {
          '--nav-color-dark': theme('colors.n.1'),
        },
      });
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply text-[2rem] md:text-[2.5rem]  xl:text-[3rem] font-bold leading-10 xl:leading-[3rem]": //set
            {},
        },
        ".h2": {
          "@apply text-[1.375rem] lg:text-[1.5rem] tracking-normal leading-normal": //set
            {},
        },
        ".h3": {
          "@apply text-[1.25rem] font-bold tracking-normal leading-normal": {}, //set
        },
        ".h4": {
          "@apply text-[1.125rem] font-semibold tracking-normal leading-normal": {}, //set
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".nav": {
          "@apply text-base  font-semibold":{},
        },
        ".body-1": {
          "@apply text-[1rem] lg:text-[1.125rem] font-normal tracking-normal leading-normal": {}, //set
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};

