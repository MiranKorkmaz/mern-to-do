import React, {useState} from 'react'
import { useDispatch } from "react-redux"
import { createTodo } from "../../actions/todos"

const Form = () => {
    const [todoData, setTodoData] = useState({
        user: "", entry: "", tags: "" 
    })
    const dispatch = useDispatch()

    const handleOnSubmit = (e) => {
        e.preventDefault()

        dispatch(createTodo(todoData))
    }

    // const clear = () => {
        
    // }


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
                onChange={(e) => setTodoData({ ...todoData, entry: e.target.value })}
            />
            <input 
                name="tags"   
                value={todoData.tags}
                onChange={(e) => setTodoData({ ...todoData, tags: e.target.value })}
            />
            <button type="submit">Submit</button>
            {/* <button type={clear}>Clear</button> */}
        </form>
    )
}

export default Form