import React from 'react'
import { ITodo } from '../types'

interface TodoFormProps {
  createTodo: (todo: ITodo) => Promise<void>
}

const FormTodo = ({ createTodo }: TodoFormProps): JSX.Element => {
  const [todo, setTodo] = React.useState<ITodo>()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (todo != null) {
      await createTodo(todo)
      setTodo(undefined)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value
    const completed = false
    setTodo((text.length === 0) ? undefined : { id: -1, text, completed })
  }

  return (
    <form onSubmit={(e) => { void handleSubmit(e) }}>
      <input type="text" name="username" value={(todo != null) ? todo.text : ''} onChange={handleInputChange} placeholder="Add new todo ..."/>
      <button type="submit">
          Add Todo
      </button>
    </form>
  )
}

export default FormTodo
