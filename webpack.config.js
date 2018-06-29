const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || 'development';

const extractSass = new ExtractTextPlugin({
    filename: "styles.css"
});

module.exports = {
  entry: {
    main: [
      "babel-polyfill",
      "./src/client/js/app.js"
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: '/',
  },
  mode: NODE_ENV,
  devtool: NODE_ENV === 'development' ? 'eval' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use:  extractSass.extract({
          // use style-loader in development
          fallback: 'style-loader',
          use: [{
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        })
      },
    ]
  },
  plugins: [
    extractSass,
    new webpack.EnvironmentPlugin({
      NODE_ENV: NODE_ENV
    })
  ]
};
