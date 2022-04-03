import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo/Todo'

const Todos = () => {
    const todos = useSelector((state) => state.todos)
    console.log(todos)
    return (
        !todos.length ? "No todos.." : (
            <>
                {todos.map((todo) => (
                    <p key={todo._id}>
                        <Todo todo={todo}/>
                    </p>
                ))}
            
            </>
        )
    )
}

export default Todos