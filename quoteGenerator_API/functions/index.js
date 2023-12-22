const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const quotes = [
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "It always seems impossible until it’s done. - Nelson Mandela",
];

app.get("/api/quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json({ quote: randomQuote });
});

exports.app = functions.https.onRequest(app);
