import * as  express from "express";

import * as dotenv from "dotenv";

import * as  bodyParser from "body-parser";

import * as path from "path";

import * as webpack from "webpack";

const app = express();

const webpackConfig = require("../webpack.dev.config.babel");

import * as webpackMiddleware from "webpack-dev-middleware";

import * as webpackHotMiddleware from "webpack-hot-middleware";

const webpackCompiler = webpack(webpackConfig);

const wpmw = webpackMiddleware(webpackCompiler);

dotenv.config();


const PORT = process.env.NODE_ENV || 3000;

app.use(wpmw);

const wphmw = webpackHotMiddleware(webpackCompiler);

app.use(wphmw);

app.use("/", express.static(path.resolve("build")));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server is listening : ${PORT}`);
});
