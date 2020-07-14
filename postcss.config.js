const tailwindcss = require("tailwindcss");
const purgecss = require('@fullhuman/postcss-purgecss')
const production = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    production && purgecss({
      content: ['./src/**/*.svelte']
    }),
    production && require("cssnano")({
      preset: "default",
    }),
  ],
};
