import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

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

  return (
    <div>
      <h1>To-Do App</h1>

      <TaskForm onAddTask={addTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App