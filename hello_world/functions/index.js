const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/hello", (req, res) => {
  console.log("hello!");
  res.send("hello!");
});

app.get("/world", (req, res) => {
  console.log("world!");
  res.send("world!");
});

exports.app = functions.https.onRequest(app);
