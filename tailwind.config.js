module.exports = {
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Source Sans Pro', 'sans-serif'],
    },
  },
  purge: {
    enabled: true,
    content: ['./**/*.html'],
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
