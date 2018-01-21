exports.modifyWebpackConfig = ({ config, stage }) => {
  stage==='develop' &&
  config.loader('eslint',
    {test: /\.js$/, loaders:['eslint-loader'], exclude: /node_modules/}
  )
}
