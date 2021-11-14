//postcss.config.js

module.exports = {
  include: ["node_modules"],
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-hexrgba"),
    require("autoprefixer"),
    require("postcss-autoreset")({
      reset: {
        color: "var(--basic-text-color)",
        "background-color": "var(--body-background-color)",
        "font-size": "var(--infonts-size)",
        "font-family": "var(--infont-family)",
        "font-weight": "var(--infont-weight)",
      },
    }),
  ],
};
