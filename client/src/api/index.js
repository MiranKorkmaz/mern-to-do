import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:3001" })

export const fetchTodos = () => API.get("/todos")
export const createTodo = (newTodo) => API.post("/todos", newTodo)
export const updateTodo = (id, updatedTodo) => API.patch(`/todos/${id}`, updatedTodo) 
export const deleteTodo = (id) => API.delete(`/todos/${id}`)

export const signIn = (formData) => API.post("/user/signin", formData)
export const signUp = (formData) => API.post("/user/signup", formData)