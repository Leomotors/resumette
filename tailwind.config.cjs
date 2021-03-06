const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },

  plugins: [],
};

module.exports = config;
