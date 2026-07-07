import express from "express";
import {
  getAllTopics,
  getTopicById,
  updateTopic,
  createTopic,
  deleteTopic,
} from "../controllers/topicController.js";

const router = express.Router();

router.get("/", getAllTopics);
router.get("/:id", getTopicById);
router.put("/:id", updateTopic);
router.post("/", createTopic);
router.delete("/:id", deleteTopic);

export default router;
