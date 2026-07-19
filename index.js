import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/database.js";
import User from "./model/user.model.js";

dotenv.config();

const app = express();
const port = 8000;

connectDB();

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({
      name,
      email,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});