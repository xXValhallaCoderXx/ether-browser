const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const developmentConfig = require("./webpack.dev");
const productionConfig = require("./webpack.prod");

module.exports = app => {
  process.env.BABEL_ENV = app.target;
  if (app.target === "production") {
    return merge(commonConfig(app), productionConfig(app), { mode: app.target });
  }
  return merge(commonConfig(app), developmentConfig(app), { mode: app.target });
};
