import React from 'react'
import { ITodo } from '../types'

interface TodoProps {
  todo: ITodo
}

const Todo = ({ todo }: TodoProps): JSX.Element => {
  return (
    <div style={{ display: 'flex', padding: '10px' }}>
      <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.text}</span>
      <div style={{ display: 'flex', paddingLeft: '30px' }}>
        <button>Edit</button>
        <button>✓</button>
        <button>✕</button>
      </div>
    </div>
  )
}

export default Todo
