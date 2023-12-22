const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = [];

app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;
  const user = { username, email, password };
  users.push(user);
  res.json({ message: "User registered successfully" });
});

exports.app = functions.https.onRequest(app);
