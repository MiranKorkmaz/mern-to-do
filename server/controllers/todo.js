import mongoose from "mongoose"
import Todos from "../models/Todos.js"

export const getTodo = async (req, res) => {
    try {
        const todos = await Todos.find()
        res.status(200).json(todos)
    } catch (error) {
        res.status(404).json( {message: error.message} )
    }
}

export const createTodo = async (req, res) => {
    const todo = req.body
    console.log(req.body)
    console.log(todo)
    const newTodo = new Todos({ ...todo, user: req.userId, createdAt: new Date().toISOString() })
    console.log(newTodo)
    try {
        await newTodo.save()
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(409).json({message: error})
        console.log(error)
    }
}

export const updateTodo = async (req, res) => {
    const { id: _id } = req.params
    const todo = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No to-do with that ID")
    const updatedTodo = await Todos.findByIdAndUpdate(_id, { ...todo, _id }, { new: true })
    res.json(updatedTodo)
}

export const deleteTodo = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No to-do with that ID")

    await Todos.findByIdAndRemove(id)

    res.json({message: "Post deleted successfully"})
}