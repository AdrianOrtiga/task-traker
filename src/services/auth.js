import baseUrl from "./serviceUrl"

const loginUrl = `${baseUrl}/users/login`
const registerUrl = `${baseUrl}/users/register`
const logoutUrl = `${baseUrl}/users/logout`

const login = async (user) => {
  const response = await fetch(
    loginUrl,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
  return await response.json()
}

const register = async (user) => {
  const response = await fetch(
    registerUrl,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
  return await response.json()
}

const logout = async () => {
  const response = await fetch(
    logoutUrl,
    {
      method: 'POST'
    })
  return await response.json()
}

const authServices = {
  login,
  register,
  logout
}

export default authServices
