import React from 'react'
import Button from '../Button'

export default function RegisterForm ({ title, user, handleFormActive, handleChangedInput, handleRegister }) {
  return (
    <div className='container'>
      <h1>{title}</h1>
      <h2>Create an account</h2>
      <form onSubmit={(e) => { handleRegister(e) }}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" name='username' placeholder="Enter username" required
            value={user.username}
            onChange={(e) => { handleChangedInput(e.target.value, 'username') }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Username</label>
          <input type="email" name='email' placeholder="Enter email"
            value={user.email}
            onChange={(e) => { handleChangedInput(e.target.value, 'email') }}
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
        <Button text={'Log in with an existing account'} color={'white'} textColor={'blue'}
          onClick={(e) => {
            e.preventDefault()
            handleFormActive()
          }} />
      </form>
    </div>
  )
}
