const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/weather/:city", (req, res) => {
  const city = req.params.city;
  res.json({ city, temperature: 25, condition: "Sunny" });
});

exports.app = functions.https.onRequest(app);
