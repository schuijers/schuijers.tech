module.exports = {
  plugins: [
    require("postcss-import")(),
    require("autoprefixer"),
    require("postcss-reporter")({
      clearReportedMessages: true,
    }),
  ],
};
