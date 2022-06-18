import { useState } from "react"

export default function AddTask ({ addTask }) {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  function handleSubmit (e) {
    e.preventDefault()

    if (!text) {
      alert('Please add task')
      return
    }

    if (!date) {
      alert('Please add date')
      return
    }

    addTask({ text: text, date: date, reminder: reminder })

    setText('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type='text' placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Date and Time</label>
        <input type='datetime-local' placeholder="Date and time" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.target.checked)} />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}
