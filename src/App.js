import { useEffect, useState } from "react";
import TaskPage from "./components/task/TaskPage"
import AuthForm from "./components/auth/AuthForm"
import authServices from "./services/auth";


function App () {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setLogged(true)
  }, [])

  function handleLoginSuccess () {
    setLogged(true)
  }

  function handleLogout () {
    authServices.logout().then(res => {
      localStorage.setItem('token', '')
      setLogged(false)
    })
  }

  return (
    <div>
      {
        logged
          ? <TaskPage handleLogout={handleLogout} />
          : <AuthForm handleLoginSuccess={handleLoginSuccess} />
      }

    </div>
  )
}

export default App;
