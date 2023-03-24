/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['"Lato"', "sans-serif", "system-ui"],
        heading: ['"Lato"', "sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          50: "#FCE7E4",
          100: "#FBD6D2",
          200: "#F8C2BB",
          300: "#F6AEA5",
          400: "#F4998E",
          500: "#F28578",
          600: "#CA6F64",
          700: "#A15950",
          800: "#79423C",
          900: "#301B18",
        },
        secondary: {
          50: "#F4FFEC",
          100: "#DFF1C9",
          200: "#CFE9AE",
          300: "#C0E294",
          400: "#B0DB79",
          500: "#A0D45E",
          600: "#85B14E",
          700: "#6B8D3F",
          800: "#506A2F",
          900: "#35471F",
        },
        tertiary: {
          50: "#FCF5E5",
          100: "#F3E9E2",
          200: "#DFDFD2",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        quaternary: {
          50: "#D6D3DE",
          100: "#BBB5C8",
          200: "#9E9AA8",
          300: "#786B92",
          400: "#564676",
          500: "#4D3A76",
          600: "#2B1B4C",
          700: "#281F3B",
          800: "#1A102D",
          900: "#110B1E",
        },
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        fullhd: "1560px",
        retina: "2000px",
      },
      gridColumnEnd: {
        '14': '14'
      }
    },
  },
  plugins: [],
};
