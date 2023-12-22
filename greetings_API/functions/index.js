const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/greet/:name", (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}! Welcome to our API.` });
});

exports.app = functions.https.onRequest(app);
