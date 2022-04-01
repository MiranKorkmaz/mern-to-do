import React, {useState} from 'react'

const Form = () => {
    const [todoData, setTodoData] = useState({
        user: "", entry: "", tags: "" 
    })

    const handleOnSubmit = () => {

    }

    const clear = () => {
        
    }


    return (
        <form onSubmit={handleOnSubmit}>
            <textarea 
                name="user" 
                rows="10"
                cols="10"    
                value={todoData.user}
                onChange={(e) => setTodoData({ ...todoData, user: e.target.value })}
            />
            <textarea 
                name="entry" 
                rows="10"
                cols="10"    
                value={todoData.entry}
                onChange={(e) => setTodoData({ ...todoData, entry: e.target.value })}
            />
            <textarea 
                name="tags" 
                rows="10"
                cols="10"    
                value={todoData.tags}
                onChange={(e) => setTodoData({ ...todoData, tags: e.target.value })}
            />
            <button type="submit">Submit</button>
            <button type={clear}>Clear</button>
        </form>
    )
}

export default Form