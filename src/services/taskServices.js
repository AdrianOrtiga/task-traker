const baseUrl = process.env.NODE_ENV === 'porduction'
  ? process.env.BASE_URL :
  `http://localhost:8000/tasks`



const getAllTasks = async () => {
  const response = await fetch(baseUrl)
  return await response.json()
}

const postNewTask = async (newTask) => {
  const response = await fetch(
    baseUrl,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTask)
    })
  return await response.json()
}

const deleteTask = async (selectedTask) => {
  const response = await fetch(
    `${baseUrl}/${selectedTask._id}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(selectedTask)
    })
  return await response.json()
}

const toggleTask = async (selectedTask) => {
  const response = await fetch(
    `${baseUrl}/${selectedTask._id}`,
    {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(selectedTask)
    })
  return await response.json()
}

const taskServices = {
  getAllTasks,
  postNewTask,
  deleteTask,
  toggleTask
}

export default taskServices