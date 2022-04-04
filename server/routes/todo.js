import express from "express";
import {getTodo, createTodo, updateTodo} from "../controllers/todo.js"
const router = express.Router()

router.get("/", getTodo)
router.post("/", createTodo)
router.patch("/:id", updateTodo)

export default router;