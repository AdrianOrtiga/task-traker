import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([
      {id:uuidv4(), text:'task 1',date:'Jan 3 2:00pm', reminder:false},
      {id:uuidv4(), text:'task 2',date:'Jan 3 2:00pm', reminder:false},
      {id:uuidv4(), text:'task 3',date:'Jan 3 2:00pm', reminder:false},
      {id:uuidv4(), text:'task 44',date:'Jan 3 2:00pm', reminder:false},])
  const [taskCounter, setTaskCounter] = useState(0)

  useEffect(() => setTaskCounter(tasks.length),[tasks])
  // useEffect(() => console.log(tasks),[tasks])

  function addTask(task){
    let currTaskCounter = taskCounter + 1
    setTaskCounter(currTaskCounter)
    setTasks(prevTask => [...prevTask, {...task, id:uuidv4()}])
  }

  function deleteTask(id){
    let text = tasks.find((task) => task.id == id).text
    if(window.confirm(`Are you sure that you to delete the "${text}" task`)){
      setTasks(tasks.filter((task) => task.id !== id))
    }
  }

  function toggleReminder(id){
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
    // tasks.forEach(task => {
    //   task.reminder = false
    // });
    // const task = tasks.find(task => task.id === id)
    // task.reminder = !task.reminder
    // const newTasks = [...tasks]
    // setTasks(newTasks)
  }

  return (
    <div className="container">
      <Header />
      <AddTask addTask={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} /> : <h3>No tasks to show</h3>}
    </div>
  )
}

export default App;
