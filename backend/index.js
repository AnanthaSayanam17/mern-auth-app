import express from "express";
import { connectToDatabase } from "./database/connectionToDatabase.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/", (req, res) => {
  res.send("Hi");
});

connectToDatabase();

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
