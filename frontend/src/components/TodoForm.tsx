import React from 'react'
import { ITodo } from '../types'

const FormTodo = (): JSX.Element => {
  const [todo, setTodo] = React.useState<ITodo>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (todo != null) {
      setTodo(undefined)
      // add code here to send todo data to server
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value
    const completed = false
    setTodo((text.length === 0) ? undefined : { text, completed })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={(todo != null) ? todo.text : ''} onChange={handleInputChange} placeholder="Add new todo ..."/>
      <button type="submit">
          Add Todo
      </button>
    </form>
  )
}

export default FormTodo
