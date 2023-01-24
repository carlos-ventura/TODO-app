import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const authAPI = String(process.env.REACT_APP_API_URL) + 'auth'

const LoginPage = (): JSX.Element => {
  const [username, setUsername] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      const response = await axios.post(authAPI, {
        username
      })
      const token: string = response.data
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      alert('Logged in')
    } catch (err) {
      delete axios.defaults.headers.common.Authorization
      alert(err)
    }

    setUsername('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const username = e.target.value
    setUsername(username)
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <form onSubmit={(e) => { void handleSubmit(e) }}>
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <br/><br/>
      <Link to="/">Home</Link>
    </div>
  )
}

export default LoginPage
