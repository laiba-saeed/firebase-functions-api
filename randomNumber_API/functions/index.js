const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/random", (req, res) => {
  const randomNum = Math.random();
  res.json({ random: randomNum });
});

exports.app = functions.https.onRequest(app);
