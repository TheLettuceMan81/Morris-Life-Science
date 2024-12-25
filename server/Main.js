import express from "express";
import cors from "cors";
import connectDB from "./lib/db.js";
const PORT = process.env.PORT || 5050;
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.json({
    msg: "Hello world!!!!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
