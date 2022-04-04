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
    const singleTodo = req.body
    const newTodo = new Todos(singleTodo)
    try {
        await newTodo.save()
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateTodo = async (req, res) => {
    const { id: _id } = req.params
    const todo = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No to-do with that ID")
    const updatedTodo = await Todos.findByIdAndUpdate(_id, todo, { new: true })
    res.json(updatedTodo)
}