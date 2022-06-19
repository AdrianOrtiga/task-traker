import React from 'react'
import Button from '../Button'

export default function LoginForm ({ title, user, handleFormActive, handleChangedInput, handleLogin }) {
  return (
    <div className='container'>
      <h1>{title}</h1>
      <h2>Log in</h2>
      <form onSubmit={(e) => { handleLogin(e) }}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" name='username' placeholder="Enter username" required
            value={user.username}
            onChange={(e) => { handleChangedInput(e.target.value, 'username') }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" required
            value={user.password}
            onChange={(e) => { handleChangedInput(e.target.value, 'password') }}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Button text={'Create a new account'} color={'white'} textColor={'blue'}
          onClick={(e) => {
            e.preventDefault()
            handleFormActive()
          }} />
      </form>
    </div>
  )
}
