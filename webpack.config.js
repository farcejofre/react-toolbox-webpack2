var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      use: ["style-loader", ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: [ "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]", "postcss-loader" ] })]
    }]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true })
  ]
};
