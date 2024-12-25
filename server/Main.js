import express from "express";
import cors from "cors";
import connectDB from "./lib/db.js";
import adminRoutes from "./routes/Admin.route.js";
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

app.use("/api/user", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
