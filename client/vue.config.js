const path = require('path')

const resolve = name => {
  return path.resolve(__dirname, name)
}
const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  publicPath: '.',
  assetsDir: 'static',
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          happyPackMode: true,
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'ant-design-vue',
                libraryDirectory: 'es',
                // 这句必须加上，不然修改主题没有效果
                style: true,
              }),
            ],
          }),
          compilerOptions: {
            module: 'es2015',
          },
        })
        return options
      })

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      })
  },
  devServer: {
    port: 9292,
    proxy: {
      '/api': {
        target: '',
        ws: false,
        changeOrigin: true,
        pathRewrite: {},
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'layout-sider-background': '#022140',
            'layout-header-background': '#65b4fd',
            'menu-dark-bg': '#022140',
            'menu-dark-item-active-bg': '#020d40cc',
            'menu-item-vertical-margin': 0,
          },
        },
      },
    },
  },
}
