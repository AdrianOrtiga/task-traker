import { FaTimes } from 'react-icons/fa'

export default function Task({ task, deleteTask, toggleReminder }) {
    const className = `task ${task.reminder ? 'reminder' : ''}`

    return (
        <div className={className} onDoubleClick={() => toggleReminder(task._id)}>
            <h3>
                {task.text} 
                <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => deleteTask(task._id)}/>
            </h3>
            <p>{task.date}</p>

        </div>
    )
}
