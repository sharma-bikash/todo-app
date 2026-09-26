import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Personal')

  function handleSubmit(e) {
    e.preventDefault()

    if (text.trim() === '') {
      return
    }

    onAddTask({
      id: Date.now(),
      text: text.trim(),
      completed: false,
      category: category,
    })

    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Urgent">Urgent</option>
      </select>

      <button type="submit">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm