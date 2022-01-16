import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [taskCounter, setTaskCounter] = useState(0)

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        `http://localhost:8000/tasks`
      )
      const resJson = await response.json()
      
      setTasks([...resJson])
    }
    fetchTasks()
  }, [])
  useEffect(() => setTaskCounter(tasks.length),[tasks])
  //useEffect(() => console.log(tasks),[tasks])
  //useEffect(() => tasks.forEach(task => { console.log(task._id)}),[tasks])

  function toggleAddTask(){
    setShowAddTask(!showAddTask)
  }

  function addTask(task){
    let currTaskCounter = taskCounter + 1
    setTaskCounter(currTaskCounter)
    // let newTask = {...task, id:uuidv4()}
    let newTask = {...task}
    const postTask = async () => {
      const response = await fetch(
        `http://localhost:8000/tasks`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newTask)
        })
        const resJson = await response.json()
        const id = resJson.newTask._id
        newTask = {...newTask, _id: id}
        if(!resJson.hasOwnProperty('message')){
            setTasks(prevTask => [...prevTask, newTask])
          } else alert('Ups! Something was wrong')
      }
    postTask()
  }

  function deleteTask(id){
    tasks.forEach(task => {
        console.log(task._id)
    });

    let selectedTask = tasks.find((task) => task._id == id)
    if(window.confirm(`Are you sure that you to delete the "${selectedTask.text}" task`)){
      const deleteTask = async () => {
        const response = await fetch(
          `http://localhost:8000/tasks/${selectedTask._id}`,
          {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(selectedTask)
          })
          const resJson = await response.json()
          if(!resJson.hasOwnProperty('message')){
            setTasks(tasks.filter((task) => task._id !== id))
          }
          else alert('Ups! something when wrong')
        }
        deleteTask()

    }
  }

  function toggleReminder(id){
    setTasks(tasks.map(task => task._id === id ? {...task, reminder: !task.reminder} : task))
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
