const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const todos = [];

app.post("/api/todos", (req, res) => {
  const { title } = req.body;
  const todo = { title, completed: false };
  todos.push(todo);
  res.json({ message: "Todo added successfully" });
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

exports.app = functions.https.onRequest(app);
