module.exports = {
  plugins: [
    require('postcss-import')(),
    require('rucksack-css')({
      autoprefixer: true
    }),
    require('css-mqpacker')(),
    require('postcss-reporter')({
      clearReportedMessages: true,
    }),
  ],
};
