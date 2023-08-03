const express = require("express");

const app = express();
const bodyParser = require("body-parser");

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);

app.use('/admin',shopRoutes);s

app.use((req, res) => {
  res.status(404).send("<h1>404 error occured</h1>");
});

app.listen(4000);
