const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/add-product'   method='POST'><input name='title' placeholder='enter product name'/> <input name='quantity' placeholder='Quantity'/><button>add product</button></form>"
  );
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/admin");
});

module.exports = router;
