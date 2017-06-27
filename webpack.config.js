const path = require('path');
const webpack = require('webpack');
const ExtractCss = require('extract-text-webpack-plugin')

const webpackPlugins = [
  new ExtractCss('css/[name].css')
]

if (process.argv.indexOf('--optimize-minimize') > -1) {
  webpackPlugins.push(webpack.optimize.UglifyJsPlugin())
}

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/",
  },
  module: {
    rules: [{
      test: /\.js?$/,
      include: [
        path.resolve(__dirname, "app")
      ],
      loader: "babel-loader"
    }, {
      test: /\.(css|scss)$/,
      use: ExtractCss.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader', 'postcss-loader'],
      }),
    }, {
      test: /\.(otf|eot|svg|ttf|woff|png|jpg|gif)/,
      loader: 'url-loader',
      options: {
        limit: 8192,
      },
    }],
  },
  plugins: webpackPlugins,
}