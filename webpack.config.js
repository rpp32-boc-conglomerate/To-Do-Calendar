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
        test: /\.css$/i,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        },
        // {
        //   loader: 'postcss-loader',
        //   options: {
        //     plugins: function () {
        //       return [
        //         require('precss'),
        //         require('autoprefixer')
        //       ];
        //     }
        //   }
        // },
        {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.s[a|c]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};