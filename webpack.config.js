const path = require("path");
const webpack = require('webpack');

module.exports = {
  entry: ['regenerator-runtime/runtime.js', path.resolve(__dirname, "client", "src", 'index.js')],
  output: { path: path.resolve(__dirname, "client", "dist") },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};