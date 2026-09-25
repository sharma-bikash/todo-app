import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('All')

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  function toggleTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function deleteTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    )
  }

  function editTask(taskId, newText) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, text: newText }
          : task
      )
    )
  }

  const filteredTasks =
    categoryFilter === 'All'
      ? tasks
      : tasks.filter((task) => task.category === categoryFilter)

  return (
    <div>
      <h1>To-Do App</h1>

      <TaskForm onAddTask={addTask} />

      <div>
        <button onClick={() => setCategoryFilter('All')}>
          All
        </button>

        <button onClick={() => setCategoryFilter('Personal')}>
          Personal
        </button>

        <button onClick={() => setCategoryFilter('Work')}>
          Work
        </button>

        <button onClick={() => setCategoryFilter('Urgent')}>
          Urgent
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
    </div>
  )
}

export default App