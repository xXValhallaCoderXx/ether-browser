if (process.env.NODE_ENV === "production") {
  console.log("PRODUCTION STORE");
  module.exports = require("./store.prod");
} else {
  console.log("DEVELOPMENT STORE");
  module.exports = require("./store.dev");
}
