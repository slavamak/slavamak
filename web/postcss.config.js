module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    "postcss-mixins": {},
    "postcss-custom-media": {},
    "postcss-preset-env": {
      autoprefixer: {
        grid: true,
      },
    },
  },
}
