import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('todoTasks')

    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [categoryFilter, setCategoryFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks))
  }, [tasks])

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

  const categoryFilteredTasks =
    categoryFilter === 'All'
      ? tasks
      : tasks.filter((task) => task.category === categoryFilter)

  const filteredTasks =
    statusFilter === 'All'
      ? categoryFilteredTasks
      : statusFilter === 'Active'
        ? categoryFilteredTasks.filter((task) => !task.completed)
        : categoryFilteredTasks.filter((task) => task.completed)

  const remainingCount = tasks.filter(
    (task) => !task.completed
  ).length

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length

  return (
    <div className="app">
      <h1>To-Do App</h1>

      <TaskForm onAddTask={addTask} />

      <div className="filter-section">
        <h3>Status</h3>

        <div className="filter-buttons">
          <button
            className={statusFilter === 'All' ? 'active-filter' : ''}
            onClick={() => setStatusFilter('All')}
          >
            All
          </button>

          <button
            className={statusFilter === 'Active' ? 'active-filter' : ''}
            onClick={() => setStatusFilter('Active')}
          >
            Active
          </button>

          <button
            className={statusFilter === 'Completed' ? 'active-filter' : ''}
            onClick={() => setStatusFilter('Completed')}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="filter-section">
        <h3>Category</h3>

        <div className="filter-buttons">
          <button
            className={categoryFilter === 'All' ? 'active-filter' : ''}
            onClick={() => setCategoryFilter('All')}
          >
            All
          </button>

          <button
            className={categoryFilter === 'Personal' ? 'active-filter' : ''}
            onClick={() => setCategoryFilter('Personal')}
          >
            Personal
          </button>

          <button
            className={categoryFilter === 'Work' ? 'active-filter' : ''}
            onClick={() => setCategoryFilter('Work')}
          >
            Work
          </button>

          <button
            className={categoryFilter === 'Urgent' ? 'active-filter' : ''}
            onClick={() => setCategoryFilter('Urgent')}
          >
            Urgent
          </button>
        </div>
      </div>

      <div className="task-counts">
        <p>Remaining: {remainingCount}</p>
        <p>Completed: {completedCount}</p>
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