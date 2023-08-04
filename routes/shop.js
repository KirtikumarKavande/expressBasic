const express = require("express");
const path = require("path");
const pathDir = require("../util/path");

const router = express.Router();
const data = require("./admin");

router.get("/", (req, res) => {


  res.sendFile(path.join(pathDir, "views", "shop.html"));
});
module.exports = router;
