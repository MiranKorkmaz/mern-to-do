import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import Todos from "./components/Todos/Todos"
import Form from './components/Form/Form'
import {getTodos} from "./actions/todos"

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <div>
      <Form />
      <Todos />
    </div>
  )
}
