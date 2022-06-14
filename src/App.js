import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import taskServices from './services/taskServices';

function App () {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    taskServices.getAllTasks()
      .then(resJson => { setTasks([...resJson]) })
  }, [])
  //useEffect(() => console.log(tasks),[tasks])
  //useEffect(() => tasks.forEach(task => { console.log(task._id)}),[tasks])

  function toggleAddTask () {
    setShowAddTask(!showAddTask)
  }

  function addTask (task) {
    // let newTask = {...task, id:uuidv4()}
    let newTask = { ...task }
    taskServices.postNewTask(newTask).then(resJson => {
      const id = resJson.newTask._id
      newTask = { ...newTask, _id: id }
      if (!resJson.hasOwnProperty('message')) {
        setTasks(prevTask => [...prevTask, newTask])
      } else alert('Ups! Something was wrong')
    })
  }

  function deleteTask (id) {
    let selectedTask = tasks.find((task) => task._id === id)
    if (window.confirm(`Are you sure that you to delete the "${selectedTask.text}" task`)) {
      taskServices.deleteTask(selectedTask)
        .then(resJson => {
          if (!resJson.hasOwnProperty('message')) {
            setTasks(tasks.filter((task) => task._id !== id))
          }
          else alert('Ups! something when wrong')
        })
    }
  }

  function toggleReminder (id) {
    let selectedTask = tasks.find((task) => task._id === id)
    taskServices.toggleTask(selectedTask).then(resJson => {
      if (!resJson.hasOwnProperty('message')) {
        setTasks(tasks.map(task => task._id === id ? { ...task, reminder: !task.reminder } : task))
      }
      else alert('Ups! something when wrong')
    })
  }

  return (
    <div className="container">
      <Header toggleAddTask={toggleAddTask} showAddTask={showAddTask} />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} /> : <h3>No tasks to show</h3>}
    </div>
  )
}

export default App;
