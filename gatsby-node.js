exports.modifyWebpackConfig = ({ config, stage }) => {
  stage==='develop' &&
  config.loader('eslint',
    {test: /\.js$/, loader:'eslint-loader', exclude: /node_modules/}
  )
}
