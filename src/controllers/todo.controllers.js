const TodoModel = require("../models/todo.model")
const UserModel = require("../models/user.model")

const saveTodo = async (req, res) => {

    const {topic, details} = req.body
    const {userID} = req.params;
    try {
        const createdTodo = await TodoModel.create({
            topic,
            details
        })

        const user = await UserModel.findById(userID)

        user.todos.push(createdTodo._id)

        await user.save()

        res.status(201).send({data: createdTodo})

    } catch (error) {
        res.status(500).send({msg: error.message})
    }
}

const getTodoOfUser = async (req, res) => {
    const {userID} = req.params
    try {
        const user = await UserModel.findById(userID).populate("todos")
        res.status(200).send({data:user.todos})
    } catch (error) {
        res.status(500).send({msg: error.message})
    }
}

const deleteTodo = async (req, res) => {

    const {userID} = req.params;
    const {todoID} = req.body

    try {
        const user = await UserModel.findById(userID)

        const updatedTodos = user.todos.filter((item)=>item._id!= todoID)

        // user.update({$set:{todos:updatedTodos}})

        res.status(201).send({data: data})

    } catch (error) {
        res.status(500).send({msg: error.message})
    }
    
}

module.exports = {
    saveTodo,
    getTodoOfUser,
    deleteTodo
}