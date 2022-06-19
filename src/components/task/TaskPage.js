import React from 'react'
import AddTask from './AddTask'
import Header from "../Header"
import TaskContainer from "./TaskContainer"
import { useState, useEffect } from 'react'
import taskServices from '../../services/taskServices'

export default function TaskPage ({ handleLogout }) {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    taskServices.getAllTasks()
      .then(resJson => {
        setTasks([...resJson])
      })
  }, [])

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
    setTasks(tasks.map(task => task._id === id ? { ...task, reminder: !task.reminder } : task))
    taskServices.toggleTask(selectedTask).then(resJson => {
      if (resJson.hasOwnProperty('message')) {
        setTasks(tasks.map(task => task._id === id ? { ...task, reminder: !task.reminder } : task))
        alert('Ups! something when wrong')
      }
    })
  }

  return (
    <div>
      <button className="btn btn-logout" onClick={() => { handleLogout() }}>Log out</button>
      <div className="container">
        <Header toggleAddTask={toggleAddTask} showAddTask={showAddTask} />
        {showAddTask && <AddTask addTask={addTask} />}
        {
          tasks.length > 0
            ? <TaskContainer tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />
            : <h3>No tasks to show</h3>
        }
      </div>
    </div>
  )
}
