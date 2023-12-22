const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/country/:name", (req, res) => {
  const countryName = req.params.name;
  res.json({
    country: countryName,
    population: "100 million",
    capital: "City",
  });
});

exports.app = functions.https.onRequest(app);
