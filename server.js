const express = require("express");
const path = require("path");

// const publicPath = path.join(__dirname, "dist");

const app = express();


app.use("/", express.static("dist"));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
})
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Crypto Gremlins Singing on: ${port}`)
})