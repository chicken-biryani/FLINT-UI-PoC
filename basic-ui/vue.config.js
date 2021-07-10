// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.json$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  },
  devServer: {
    proxy: 'http://127.0.0.1:8080/'
  }
}
