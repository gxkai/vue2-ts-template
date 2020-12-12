const vueConfig = require('@vue/cli-service/webpack.config.js');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-docgen-loader',
    enforce: 'post'
  })
  return {
    ...config,
    resolve: {
      ...vueConfig.resolve,
      alias: {
        ...vueConfig.resolve.alias,
        'vue$': 'vue/dist/vue.esm.js' // if you need it
      },
    },
    module: {
      ...vueConfig.module,
      rules: [...vueConfig.module.rules],
    },
  }
}
