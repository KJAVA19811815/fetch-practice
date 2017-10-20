const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fetch("http://localhost:8080/dragons")
    .then(resp => resp.json())
    .then(function(data) {
      res.render("home", { fat: data });
    });
});

app.listen(3000, () => {
  console.log("3000");
});
