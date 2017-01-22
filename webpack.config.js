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
      // Should change to "use" instead of "loader" below for future stable extract-text-webpack-plugin 2
      loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: [
          {
            loader: "css-loader",
            // Should change to "options" instead of "query" below
            query: { modules: true, importLoaders: 1, localIdentName: "[name]__[local]__[hash:base64:5]" }
          }, {
            loader: "postcss-loader"
          }
        ] })
    }]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css' })
  ]
};
