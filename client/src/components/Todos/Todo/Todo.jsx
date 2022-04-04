import React from 'react'

const Todo = ({todo, setCurrentId}) => {
    return (
        <>
            <p>{todo.user}</p>
            <p>{todo.entry}</p>
            <p>{todo.tags.map((tag) => `#${tag} `)}</p>
            <p>Created at: {todo.createdAt}</p>
            <button>Delete</button>
            <button onClick={() => setCurrentId(todo._id)}>Edit</button>
        </>
    )
}

export default Todo