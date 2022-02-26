module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
      green: '#5dbb63',
      yellow: '#fce205',
    }),
    extend: {},
  },
  plugins: [],
}
