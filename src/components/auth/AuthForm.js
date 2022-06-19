import React from 'react'
import { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import authServices from '../../services/auth'

const title = 'Task Traker'

export default function AuthForm ({ handleLoginSuccess }) {
  const [loginFormActive, setLoginFormActive] = useState(true)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleFormActive () {
    setLoginFormActive(!loginFormActive)
  }

  function handleChangedInput (newValue, nameValue) {
    if (nameValue === 'username') setUsername(newValue)
    if (nameValue === 'password') setPassword(newValue)
    if (nameValue === 'email') setEmail(newValue)
  }

  function handleLogin (e) {
    e.preventDefault()
    const user = {
      username,
      password
    }
    authServices.login(user).then(checkAuthentification)
  }

  function handleRegister (e) {
    e.preventDefault()
    const user = {
      username,
      email,
      password
    }

    authServices.register(user).then(checkAuthentification)
  }

  function checkAuthentification (response) {
    if (response.hasOwnProperty('error')) {
      alert(response.error)
      return
    }

    localStorage.setItem('token', response.token)
    handleLoginSuccess()
  }

  return (
    <div>
      {
        loginFormActive
          ? <LoginForm
            user={{ username, password }}
            title={title}
            handleFormActive={handleFormActive}
            handleChangedInput={handleChangedInput}
            handleLogin={handleLogin}
          />
          : <RegisterForm
            user={{ username, password, email }}
            title={title}
            handleFormActive={handleFormActive}
            handleChangedInput={handleChangedInput}
            handleRegister={handleRegister}
          />
      }
    </div>
  )
}
