const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
const bodyParser = require("body-parser");

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const contactusRoutes=require('./routes/contactus')
const successRoutes=require('./routes/suceess')

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);

app.use("/admin", shopRoutes);
app.use('/admin', contactusRoutes);
app.use(successRoutes);


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000);
