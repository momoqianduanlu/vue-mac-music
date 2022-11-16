const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')

console.log(path.resolve(__dirname, 'src/components'))

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'))
    config.resolve.alias.set('@assets', path.resolve(__dirname, 'src/assets'))
    config.resolve.alias.set(
      '@component',
      path.resolve(__dirname, 'src/components'),
    )
  },
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  devServer: {
    open: true,
    proxy: {
      '/netease-api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/netease-api': '' },
        changeOrigin: true,
        secure: false,
      },
    },
    port: 8888,
  },
})
