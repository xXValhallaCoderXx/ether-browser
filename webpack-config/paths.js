const path = require("path");

const PATHS = {
  app: path.resolve(__dirname, "../src"),
  build: path.resolve(__dirname, "../dist"),
  nodeModules: path.resolve(__dirname, "../node_modules"),
  reactTableCSS: path.resolve(__dirname, "../src/shared/styles/react-table.css")
};

module.exports = PATHS;
