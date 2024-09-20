/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
      gray:"#5A5959",
      yellow:"#FFEAAE",
      "dark-yellow":"#F4CD62",
      orange:"#F6820C",
      red:"#D01C28",
      },
    }
  },
  plugins: [],
}

