import React from 'react'
import { Link } from 'react-router-dom'

const TodoPage = (): JSX.Element => {
  const todoList = ['todo 1', 'todo 2', 'todo 3']

  return (
    <>
    <h1>TODO List</h1>
      <br/><br/>
      <Link to="/">Home</Link>
    </>
  )
}

export default TodoPage
