module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lora: "'Lora', serif",
        cobin: "'Cobin', sans-serif",
        josefin: "'Josefin Slob', serif",
        libre: "'Libre Barcode 39 Text', cursive",
        poiret: "'Poiret One', cursive",
        redhot: "'Red Hat Display', sans-serif",
        urbonist: "'Urbanist', sans-serif",
        roboto: "'Roboto Serif', sans-serif"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
