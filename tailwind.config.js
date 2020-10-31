module.exports = {
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Source Sans Pro', 'sans-serif'],
    },
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.js'],
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
