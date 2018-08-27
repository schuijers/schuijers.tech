const GENERATE_FAV_ICONS = process.env.NODE_ENV === 'production';

module.exports = {
  lowerCaseAttributeNames: false,
  plugins: {
    'posthtml-favicons': {
      configuration: {
        path: '/',
        appName: 'Schuijers.tech',
        appDescription: null,
        developerName: 'Martijn Schuijers',
        developerURL: 'https://schuijers.tech',
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
        logging: false,
        icons: {
          android: GENERATE_FAV_ICONS,
          appleIcon: GENERATE_FAV_ICONS,
          appleStartup: GENERATE_FAV_ICONS,
          coast: GENERATE_FAV_ICONS,
          favicons: GENERATE_FAV_ICONS,
          firefox: GENERATE_FAV_ICONS,
          windows: GENERATE_FAV_ICONS,
          yandex: GENERATE_FAV_ICONS,
        },
      },
    },
  },
  recognizeSelfClosing: true,
};
