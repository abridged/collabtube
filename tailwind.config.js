module.exports = {
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: ["./src/**/*.html", "./src/**/*.svelte"],
    },
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography')
    ],
  };
  