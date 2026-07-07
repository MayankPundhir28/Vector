import express from "express";
import {
  createProgress,
  getProgressById,
  updateProgress,
  getAllProgress,
} from "../controllers/progressController.js";

const router = express.Router();

router.post("/", createProgress);
router.get("/:userId", getProgressById);
router.put("/:userId", updateProgress);

export default router;
