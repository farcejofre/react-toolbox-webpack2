var path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
    }, {
      test: /\.css$/,
      include: /node_modules/,
      use: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]', 'postcss-loader']
    }]
  },
  plugins: [
  ]
};
