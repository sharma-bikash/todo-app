function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add your first task!</p>
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.text}</h3>
          <p>Category: {task.category}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskList