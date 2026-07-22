import express from "express";
import dotenv from "dotenv";
import { db } from "./util/database.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

db();

app.get("/", (req, res) => {
  res.send("Backend is ready");
});

app.get("/user", (req, res) => {
  res.send("It is About page");
});

app.get("/person", (req, res) => {
  res.send({
    name: "Ali",
    age: 44,
  });
});

app.listen(port, () => {
  console.log(`The backend is running on ${port}`);
});