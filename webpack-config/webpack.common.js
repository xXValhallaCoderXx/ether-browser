const webpack = require("webpack");
const merge = require("webpack-merge");
const PATHS = require("./paths");
const path = require("path");
const parts = require("./webpack.parts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("../env-keys.json");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
commonConfig = app =>
  merge([
    {
      entry: {
        app: PATHS.app
      },
      output: {
        publicPath: "/", // Need this if you got Source maps on for Images to load
      },
      plugins: [
        //new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
          title: "Webpack demo",
          template: path.resolve(__dirname, "../src/index.html"),
          favicon: path.resolve(__dirname, "../src/shared/images/ether-logo.png")
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
