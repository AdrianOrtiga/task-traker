import { useState } from "react"

export default function AddTask({ addTask={addTask} }) {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Date and Time</label>
                <input type='text' placeholder="Date and time"  onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>reminder</label>
                <input type='checkbox' onChange={(e) => setReminder(e.target.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' 
                onClick={() => addTask({text:text, date:date,reminder:reminder})}/>
        </form>
    )
}
