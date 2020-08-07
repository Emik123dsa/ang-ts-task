const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = require("./webpack.config.js")({
  entry: [path.join(process.cwd(), "src/bootstrap.ts")],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  target: "web",
  plugins: [
    new TerserPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: "static/index.html",
      filename: "main.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
  ],
});
