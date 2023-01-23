import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Todo from '../components/Todo'
import TodoForm from '../components/TodoForm'
import { ITodo } from '../types'

const todosAPI = String(process.env.REACT_APP_API_URL) + 'tasks'

const TodosPage = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const loadTodos = async (): Promise<void> => {
    const response = await axios.get(todosAPI)
    setTodos(response.data)
  }

  const createTodo = async (todo: ITodo): Promise<void> => {
    await axios.post(todosAPI, {
      text: todo.text,
      completed: todo.completed
    })
    await loadTodos()
  }

  const updateTodo = async (todo: ITodo): Promise<void> => {
    await axios.put(`${todosAPI}/${todo.id}`, {
      id: todo.id,
      text: todo.text,
      completed: todo.completed
    })
    await loadTodos()
  }

  const deleteTodo = async (todo: ITodo): Promise<void> => {
    // Small bug here need to refresh page for text update
    await axios.delete(`${todosAPI}/${todo.id}`)
    await loadTodos()
  }

  useEffect(() => {
    loadTodos()
      .catch(console.error)
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>TODO List</h1>
      <br/>
      <TodoForm createTodo={createTodo} />
      <br/><br/>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))}
      <br/><br/>
      <Link to="/">Home</Link>
    </div>
  )
}

export default TodosPage
