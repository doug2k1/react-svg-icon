const path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  }
}