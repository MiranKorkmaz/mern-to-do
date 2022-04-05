import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { createTodo, updateTodo } from "../../actions/todos"


// get current id 

const Form = ({currentId, setCurrentId}) => {
    const [todoData, setTodoData] = useState({
        entry: "", tags: "" 
    })
    const todo = useSelector((state) => currentId ? state.todos.find((t) => t._id === currentId) : null)
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("profile"))

    useEffect(() => {
        if (todo) setTodoData(todo)
    }, [todo])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(currentId === 0) {
            dispatch(updateTodo({ ...todoData, user: user?.result?.user }))
        } else {
            dispatch(createTodo(currentId, {...todoData, user: user?.result?.user}))
        }
    }
    if(!user?.result?.user) {
        return (
            <div>
                <p>Please sign in to create a todo</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input 
                name="entry" 
                value={todoData.entry}
                onChange={(e) => setTodoData({ ...todoData, entry: e.target.value})}
            />
            <input 
                name="tags"   
                value={todoData.tags}
                onChange={(e) => setTodoData({ ...todoData, tags: e.target.value.split(",") })}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form