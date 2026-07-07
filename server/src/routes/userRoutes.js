import express from "express";
import { updateUser, getUserById } from "../controllers/userController.js";

const router = express.Router();

router.put("/:id", updateUser);
router.get("/:id", getUserById);

export default router;
