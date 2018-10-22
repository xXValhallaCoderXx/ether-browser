const merge = require("webpack-merge");
const PATHS = require("./paths");
const path = require("path");
const parts = require("./webpack.parts");
const safeParser = require("postcss-safe-parser");

productionConfig = app =>
  merge([
    parts.clean(PATHS.build),
    parts.minifyJavaScript(),
    parts.minifyCSS({
      options: {
        parser: safeParser,
        discardComments: {
          removeAll: true
        },
        safe: true
      }
    }),
    {
      output: {
        filename: "[name].[chunkhash:8].js",
        chunkFilename: "static/js/[name].[chunkhash:8].js"
      },
      optimization: {
        splitChunks: {
          chunks: "all"
        },
        runtimeChunk: {
          name: "manifest"
        }
      },
      recordsPath: path.join(__dirname, "../dist/records.json")
    },
    parts.extractCSS({
      include: [PATHS.app, PATHS.reactTableCSS],
      //exclude: PATHS.nodeModules
    }),
    parts.loadImages({
      options: {
        limit: 50000,
        name: "static/images/[name].[hash:8].[ext]"
      }
    })
  ]);

module.exports = productionConfig;
