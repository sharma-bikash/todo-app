import { useState } from 'react'

function TaskList({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add your first task!</p>
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  )
}

function TaskItem({ task, onToggleTask, onDeleteTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)

  function handleSave() {
    if (editText.trim() === '') {
      return
    }

    onEditTask(task.id, editText.trim())
    setIsEditing(false)
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />

          <button onClick={handleSave}>Save</button>

          <button onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>
            {task.text} - {task.category}
          </span>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={() => onDeleteTask(task.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  )
}

export default TaskList