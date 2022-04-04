import React, { useState, useEffect } from 'react'
import Todos from "../Todos/Todos"
import Form from '../Form/Form'
import {useDispatch} from "react-redux"
import {getTodos} from "../../actions/todos"

export default function Home() {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getTodos())
    }, [currentId, dispatch])
  return (
    <div>
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
        <Todos setCurrentId={setCurrentId}/>
    </div>
  )
}
