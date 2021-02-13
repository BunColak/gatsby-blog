module.exports = {
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Source Sans Pro', 'sans-serif'],
    },
  },
  purge: {
    enabled: false,
    content: ['./src/**/*.js'],
  },
  darkMode: 'class',
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
