import axios from "axios"

const url = "http://localhost:3001/todos"

export const fetchTodos = () => axios.get(url)
export const createTodo = (newTodo) => axios.post(url, newTodo)
