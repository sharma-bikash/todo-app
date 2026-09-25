function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add your first task!</p>
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />

          <span>
            {task.text} - {task.category}
          </span>

          <button onClick={() => onDeleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default TaskList