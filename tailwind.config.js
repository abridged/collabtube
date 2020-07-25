module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.js",
      "layouts/**/*.js",
      "pages/**/*.js",
      "plugins/**/*.js",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        header: ['Recursive']
      }
    },
  },
  variants: {},
  plugins: [],
}
