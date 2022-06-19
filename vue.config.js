const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

    // 关闭eslint， build serve将不会进行eslint检查
    lintOnSave: false,
    // 书写原生的webpack配置项
      configureWebpack: {
        devServer: {
          open: true,
          port: 8080,
          host:'localhost',
        }
      }
})
