const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const db = [
  {
    id: 1,
    name: "Goku"
  },
  {
    id: 2,
    name: "Gohan"
  },
  {
    id: 3,
    name: "Vegeta"
  }
];

let nextId = 4;

app.get("/dragons", (req, res) => {
  res.send(JSON.stringify(db));
});

app.post("/dragons", (req, res) => {
  const name = req.body.dragon;

  const newDragon = {
    id: nextId++,
    name: name
  };

  db.push(newDragon);
  res.redirect("http://localhost:3000/");
});

app.listen(8080, () => {
  console.log("8080");
});
