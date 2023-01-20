import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface IFormData {
  username: string
  password: string
}

const LoginPage = (): JSX.Element => {
  const [formData, setFormData] = useState<IFormData>({
    username: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // add code here to send login data to server
    console.log('username:', formData.username)
    console.log('password:', formData.password)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
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
