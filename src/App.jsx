import { useState } from 'react'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  return (
    <div>
      <h1>To-Do App</h1>

      <TaskForm onAddTask={addTask} />
    </div>
  )
}

export default App