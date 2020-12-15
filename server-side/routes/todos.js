import express from "express";
import { getToDos, createToDos } from "../controllers/todos.js";
const router = express.Router();
router.get("/", getToDos);
router.post("/", createToDos);

export default router;
