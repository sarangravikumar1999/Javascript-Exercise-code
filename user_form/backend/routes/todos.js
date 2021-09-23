const express = require("express");
const Todo = require("../models/todo");
const router = express.Router();
const TodoController = require("../controller/todoController");

router.get("/", TodoController.allTodos);
router.post("/", TodoController.postTodos);
router.delete("/:id", TodoController.deleteTodos);
router.patch("/:id", TodoController.updateTodos);

module.exports = router;
