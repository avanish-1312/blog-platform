import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Blog Platform API is running 🚀",
  });
});

// Authentication Routes
app.use("/api/auth", authRoutes);

export default app;