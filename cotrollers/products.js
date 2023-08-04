const rootDir = require("../util/path");
const path = require("path");
const products = [];

exports.getProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postProduct = (req, res) => {
    console.log(req.body)
  
  res.redirect("/admin");
};
