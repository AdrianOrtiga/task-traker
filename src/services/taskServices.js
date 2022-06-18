const baseUrl = process.env.NODE_ENV === 'production'
  ? `https://task-traker-server-production.up.railway.app`
  : `http://localhost:8000`

const taskUrl = `${baseUrl}/tasks`

const getAllTasks = async () => {
  const response = await fetch(taskUrl)
  return await response.json()
}

const postNewTask = async (newTask) => {
  const response = await fetch(
    taskUrl,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTask)
    })
  return await response.json()
}

const deleteTask = async (selectedTask) => {
  const response = await fetch(
    `${taskUrl}/${selectedTask._id}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(selectedTask)
    })
  return await response.json()
}

const toggleTask = async (selectedTask) => {
  const response = await fetch(
    `${taskUrl}/${selectedTask._id}`,
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