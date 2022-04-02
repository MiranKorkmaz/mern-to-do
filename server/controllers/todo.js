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
    console.log(singleTodo)
    const newTodo = new Todos(singleTodo)
    console.log(newTodo)
    try {
        await newTodo.save()
        res.status(201).json(newTodo)
    } catch (error) {
        console.log(error.message)
        res.status(409).json({message: error.message})
    }
}
