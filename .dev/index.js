const express = require("express");

const PORT = process.env.NODE_PORT || 3000;

const dotenv = require("dotenv");

const bodyParser = require("body-parser");

const path = require("path");

const webpack = require("webpack");

const app = express();

const webpackConfig = require("../webpack.dev.config.babel");

const webpackMiddleware = require("webpack-dev-middleware");

const webpackHotMiddleware = require("webpack-hot-middleware");

const webpackCompiler = webpack(webpackConfig);

const wpmw = webpackMiddleware(webpackCompiler, {});

dotenv.config();

app.use(wpmw);

const wphmw = webpackHotMiddleware(webpackCompiler);

app.use(wphmw);

app.use("/", express.static(path.resolve("build")));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server is listening : ${PORT}`);
});
