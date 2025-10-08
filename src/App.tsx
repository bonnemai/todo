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
      <div className='input-box'>
          <input placeholder='New Task' onChange={(e)=>setNewTask(e.currentTarget.value)} value={newTask}/>
          <button onClick={()=>setTasks([...tasks, newTask])}>Add Task</button>
      </div>
        {tasks?.map((task, id)=>(<TaskLine key={id} task={task} id={id}/>))}
      
    </>
  )
}

export default App
