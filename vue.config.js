module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    },
    webpack: {
      dir: [
        './webpack'
      ]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/stylesheets/config/_colors.scss";
        @import "@/assets/stylesheets/config/_utilities.scss";
        @import "@/assets/stylesheets/config/_fonts.scss";
        `
      }
    }
  }
}
