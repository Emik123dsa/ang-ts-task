const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.SourceMapDevToolPlugin({
    filename: "main.js.map",
    exclude: ["bundle.js"],
  }),
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: "static/index.html",
    filename: "index.html",
  }),
  new CleanWebpackPlugin(),
  new CircularDependencyPlugin({
    exclude: /node_modules/,
    failOnError: false,
  }),
];

module.exports = require("./webpack.config.js")({
  mode: "development",
  entry: {
    polyfills: ["./src/polyfills.ts"],
    bootstrap: ["./src/bootstrap.ts", "webpack-hot-middleware/client"],
  },
  output: {
    filename: "[name].[hash:64].dev.js",
    chunkFilename: "[name].[hash:64].dev.js",
  },
  plugins,
  target: "web",
  devtool: "eval-source-map",
  perfomance: {
    hints: false,
  },
});
