const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name]-[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});
