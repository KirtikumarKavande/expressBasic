const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const pathDir = require("../util/path");

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(pathDir, "views", "contactus.html"));
});
module.exports = router;
