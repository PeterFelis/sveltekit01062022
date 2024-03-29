module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
      lg: '8px',
      xl: '0px'
    },
    extend: {
      fontFamily: {
        'Raleway': ['"Raleway"', 'sans-serif'],
        'Valera': ['"Varela Round"', 'sans-serif']
      },
      colors: {
        'geel': '#F2C76E',
        'licht': '#eaf4f4',
        'donker': '#6b9080',
        'heeldonker': '#3d5248',
        'rood': '#D7594D',
        'paars': "#AD92BB",
        'achtergrond': '#F8F6F2',
        'oranje': "#F5B06F"
      },
    }
  },
};