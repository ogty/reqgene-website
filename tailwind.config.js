const production = !process.env.ROLLUP_WATCH;

module.exports = {
  content: [
    './src/**/*.svelte',
    './src/**/*.html',
  ],
  enabled: production,
  theme: {
    extend: {},
  },
  plugins: [],
}
