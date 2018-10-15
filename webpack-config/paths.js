const path = require("path");

const PATHS = {
  app: path.resolve(__dirname, "../src"),
  build: path.resolve(__dirname, "../dist"),
  nodeModules: path.resolve(__dirname, "../node_modules")
};

module.exports = PATHS;
