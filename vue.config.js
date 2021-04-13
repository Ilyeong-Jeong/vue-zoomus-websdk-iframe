const path = require('path');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/',
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.join(__dirname, 'src'),
      },
    },
  },
}
