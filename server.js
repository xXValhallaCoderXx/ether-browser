const express = require("express");
const path = require("path");

const publicPath = path.join(__dirname, "./dist");

const app = express();


app.use(express.static(publicPath));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, function () {
  console.log('Crypto Gremlines Singing on: 3000')
})