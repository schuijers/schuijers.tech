/* eslint-disable global-require, import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [require('stylelint')()],
    }),
    require('rucksack-css')({
      autoprefixer: true,
    }),
    require('css-mqpacker')(),
    require('postcss-reporter')({
      clearReportedMessages: true,
    }),
  ],
};
