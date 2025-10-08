import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskLine from './components/TaskLine'

function App() {
  // const [count, setCount] = useState(0)
  const [newTask, setNewTask] = useState('New Task')
  const [tasks, setTasks] = useState(['Test1'])


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

      </div>
      <h1>Vite + React</h1>
      <div>
          <input placeholder='New Task' onChange={(e)=>setNewTask(e.currentTarget.value)} value={newTask}/>
          <button onClick={()=>setTasks(([...tasks, newTask]))}>Add Task</button>
      </div>
        {tasks?.map((task, id)=>(TaskLine({task, id})))}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
