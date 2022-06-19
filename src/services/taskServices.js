import baseUrl from "./serviceUrl"

const taskUrl = `${baseUrl}/tasks`

const getAllTasks = async () => {
  const response = await fetch(
    taskUrl,
    {
      method: 'GET',
      headers: getHeaders()
    })
  return await response.json()
}

const postNewTask = async (newTask) => {
  const response = await fetch(
    taskUrl,
    {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(newTask)
    })
  return await response.json()
}

const deleteTask = async (selectedTask) => {
  const response = await fetch(
    `${taskUrl}/${selectedTask._id}`,
    {
      method: 'DELETE',
      headers: getHeaders(),
      body: JSON.stringify(selectedTask)
    })
  return await response.json()
}

const toggleTask = async (selectedTask) => {
  const response = await fetch(
    `${taskUrl}/${selectedTask._id}`,
    {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(selectedTask)
    })
  return await response.json()
}

function getHeaders () {
  const token = localStorage.getItem('token')

  return {
    'content-type': 'application/json',
    'authorization': `bearer ${token}`
  }
}

const taskServices = {
  getAllTasks,
  postNewTask,
  deleteTask,
  toggleTask
}

export default taskServices