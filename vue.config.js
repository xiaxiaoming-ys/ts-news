module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    // open: true,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       // 新版本sass-loader， 将data改成prependData进行配置
  //       prependData: `@import "@/assets/scss/_variable.scss";`
  //     }
  //   }
  // }
}