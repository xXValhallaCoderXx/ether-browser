const webpack = require("webpack");
const merge = require("webpack-merge");
const PATHS = require("./paths");
const path = require("path");
const parts = require("./webpack.parts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("../env-keys.json");

commonConfig = app =>
  merge([
    {
      entry: {
        app: PATHS.app
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: "Webpack demo",
          template: path.resolve(__dirname, "../src/index.html")
        }),
        new webpack.NamedModulesPlugin()
      ],
      resolve: {
        extensions: [".js",".ts", ".tsx"],
        modules: [path.resolve(__dirname, "../src"), "node_modules"]
      }
    },
    parts.loadTypescript({ include: PATHS.app, exclude: PATHS.nodeModules }),
    // Set Env Variable indivdually
    parts.setFreeVariable("SOME_VAR", "This is from the freeee variables"),
    // Will read from env-vars.json and set Variables for Production/Development
    parts.setFreeVariables(config[app.target])
  ]);

module.exports = commonConfig;
