import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = (): JSX.Element => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Home</h1>
      <Link to="/login"> Login </Link> <br/><br/>
      <Link to="/todo"> TODO </Link> <br/>
    </div>
  )
}

export default HomePage
