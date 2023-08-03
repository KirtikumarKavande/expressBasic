const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product'   method='POST'><input name='title' placeholder='enter product name'/> <input name='quantity' placeholder='Quantity'/><button>add product</button></form>"
  );
});

app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/add-product");
});

app.use("/", (req, res) => {
  res.end("hello express tut");
});

app.listen(4000);
