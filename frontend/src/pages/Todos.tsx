import React from 'react'
import { Link } from 'react-router-dom'
import Todo from '../components/Todo'
import TodoForm from '../components/TodoForm'
import { ITodo } from '../types'

const TodosPage = (): JSX.Element => {
  const todos: ITodo[] = [
    { text: 'Todo1 with a longer text just because', completed: false },
    { text: 'Todo2', completed: true },
    { text: 'Todo3', completed: false },
    { text: 'Todo4', completed: true }
  ]

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>TODO List</h1>
      <br/>
      <TodoForm />
      <br/><br/>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
      <br/><br/>
      <Link to="/">Home</Link>
    </div>
  )
}

export default TodosPage
