const http = require("http");
const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("In 1st middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In 2nd middleware");
  res.send({ key1: "1" });
});

app.listen(3000);
