import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import TodoPage from './pages/Todo'
import HomePage from './pages/Home'

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={<TodoPage/>} />
      </Routes>
    </Router>
  )
}

export default App
