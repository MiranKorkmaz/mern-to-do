import React from 'react'
import {useDispatch} from "react-redux"
import {deleteTodo} from "../../../actions/todos"

const Todo = ({todo, setCurrentId}) => {
    const dispatch = useDispatch()

    return (
        <>
            <p>{todo.user}</p>
            <p>{todo.entry}</p>
            <p>{todo.tags.map((tag) => `#${tag} `)}</p>
            <p>Created at: {todo.createdAt}</p>
            <button onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
            <button onClick={() => setCurrentId(todo._id)}>Edit</button>
        </>
    )
}

export default Todo