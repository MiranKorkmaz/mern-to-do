import React from 'react'

const Todo = ({todo}) => {
    return (
        <>
            <p>{todo.user}</p>
            <p>{todo.entry}</p>
            <p>{todo.tags.map((tag) => `#${tag} `)}</p>
            <button>Delete</button>
        </>
    )
}

export default Todo