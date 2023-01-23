import React from 'react'
import { ITodo } from '../types'

interface TodoProps {
  todo: ITodo
  updateTodo: (todo: ITodo) => Promise<void>
  deleteTodo: (todo: ITodo) => Promise<void>
}

const Todo = ({ todo, updateTodo, deleteTodo }: TodoProps): JSX.Element => {
  const handleDelete = async (): Promise<void> => {
    await deleteTodo(todo)
  }

  const handleTextUpdate = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    await updateTodo({ ...todo, text: e.target.value })
  }

  const handleCompleteUpdate = async (): Promise<void> => {
    await updateTodo({ ...todo, completed: !todo.completed })
  }

  return (
    <div style={{ display: 'flex', padding: '10px' }}>
      <input onChange={(e) => { void handleTextUpdate(e) }} defaultValue={todo.text} type="text" disabled={todo.completed} />
      <div style={{ display: 'flex', paddingLeft: '30px' }}>
        <button onClick={() => { void handleCompleteUpdate() }}>✓</button>
        <button onClick={() => { void handleDelete() } }>✕</button>
      </div>
    </div>
  )
}

export default Todo
