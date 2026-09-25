import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  return (
    <div>
      <h1>To-Do App</h1>

      <TaskForm onAddTask={addTask} />

      <TaskList tasks={tasks} />
    </div>
  )
}

export default App