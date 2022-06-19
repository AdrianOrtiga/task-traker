import Task from "./Task"

export default function TaskContainer ({ tasks, deleteTask, toggleReminder }) {
  return (
    <>
      {tasks.map((task) =>
        <Task key={task._id} task={task} deleteTask={deleteTask}
          toggleReminder={toggleReminder} />)}
    </>
  )
}
