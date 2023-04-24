const todoRouter=require("express").Router()
const {saveTodo, getTodoOfUser, deleteTodo} = require("../controllers/todo.controllers")

todoRouter.post("/create/:userID", saveTodo)
todoRouter.get("/:userID", getTodoOfUser)
todoRouter.post("/delete/:userID", deleteTodo)


module.exports = todoRouter