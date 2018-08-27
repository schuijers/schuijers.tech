# schuijers.tech

Built with :heart: and:

- [Parcel](https://parceljs.org/) - Blazing fast, zero configuration web application bundler ([tutorial](https://scotch.io/tutorials/a-zero-configuration-module-bundler-meet-parcel));
- [PostCSS](http://postcss.org/) - A tool for transforming CSS with JavaScript. Plugins:
  - [autoprefixer](https://github.com/postcss/autoprefixer) - plugin to parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](https://caniuse.com/);
  - [css-mqpacker](https://github.com/hail2u/node-css-mqpacker) - plugin for packing same CSS media query rules into one;
  - [import](https://github.com/postcss/postcss-import) - plugin to inline `@import` rules content;
  - [reporter](https://github.com/postcss/postcss-reporter) - plugin to `console.log()` the messages (warnings, etc.) registered by other PostCSS plugins;
  - [rucksack](https://www.rucksackcss.org/) - plugin pack to speed up CSS development with new features and shortcuts;
- [PostHTML](https://github.com/posthtml/posthtml) - A tool for transforming HTML with JavaSript. Plugins:
  - [posthtml-favicons](https://github.com/mohsen1/posthtml-favicons) - plugin for generating favicons based on a single image;
- Fluid typography ([background article](https://www.smashingmagazine.com/2016/05/fluid-typography/), implemented using [rucksack](https://www.rucksackcss.org/));

Linted with:

- [ESLint](https://eslint.org/) - A fully pluggable tool for identifying and reporting on patterns in JavaScript;
- [styleling](https://stylelint.io/) - A mighty, modern style linter;

Tested with:

- [XRespond](http://app.xrespond.com/) - Virtual Device Lab;
