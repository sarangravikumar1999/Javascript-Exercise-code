const Todo = require("../models/todo");

exports.allTodos = async (req, res) => {
  try {
    // use find by id to get only the data of that particular user and using that id get the related todos
    const todo = await Todo.find({ user: req.user._id });
    console.log(todo);
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};

exports.postTodos = async (req, res) => {
  // while adding todo also set the field to add user id of currently logged user
  try {
    const todo = new Todo({
      todo: req.body.todo,
      user: req.user._id,
    });
    const data = await todo.save();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};
exports.deleteTodos = async (req, res) => {
  try {
    const todoId = await Todo.findById(req.params.id);
    const data = await todoId.remove();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};
exports.updateTodos = async (req, res) => {
  try {
    const todoId = await Todo.findById(req.params.id);
    todoId.completed = req.body.completed;
    const data = await todoId.save();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};
