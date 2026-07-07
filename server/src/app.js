import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import topicRoutes from "./routes/topicRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import planRoutes from "./routes/planRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
dotenv.config();
const app = express();

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(cors());
app.use(express.json());

app.use("/api/plans", planRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

export default app;
