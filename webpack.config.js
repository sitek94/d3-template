const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader',   // 2. Css to commonJS
          'sass-loader'   // 1. Convert sass to css
        ]
      }
    ]
  }
}