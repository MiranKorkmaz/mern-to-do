import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { createTodo, updateTodo } from "../../actions/todos"


// get current id 

const Form = ({currentId, setCurrentId}) => {
    const [todoData, setTodoData] = useState({
        user: "", entry: "", tags: "" 
    })
    const todo = useSelector((state) => currentId ? state.todos.find((t) => t._id === currentId) : null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (todo) setTodoData(todo)
    }, [todo])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(currentId) {
            dispatch(updateTodo(currentId, todoData))
        } else {
            dispatch(createTodo(todoData))
        }
    }


    return (
        <form onSubmit={handleOnSubmit}>
            <input 
                name="user"    
                value={todoData.user}
                onChange={(e) => setTodoData({ ...todoData, user: e.target.value })}
            />
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