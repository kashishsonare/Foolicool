/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // gotham: ['Gotham-medium','Gotham-Book', 'sans-serif'],
        gothamMedium: ['Gotham-Medium', 'serif'],
        gothamBook: ['Gotham-Book', 'serif'],
        hornbill: ['Hornbill', 'sans-serif'],
        abeezee: ['ABeeZee', 'sans-serif'],
        maven: ['Maven Pro', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em', 
      }
    },
  },
  plugins: [],
};
