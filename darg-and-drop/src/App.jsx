import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// ✏️ 🗑️


function App() {

  const [input, setinput] = useState('')

  const handelSubmit = (e) => {
    setinput(e.target.value)
  }
  const handelkey = (e) => {
    console.log(e.keyCode)
    if (e.keyCode === 13) {
      setinput('')
    }
  }
  return (
    <>
      <div className="app">
        <h1 className='task-h'>Task Manager</h1>
        <input type="text" className='main-input' placeholder='Add some task'
          onChange={handelSubmit}
          onKeyDown={handelkey}
        />
        <div className="borad">
          <div className="todo">
            <h2 className=''>Todo</h2>
            <div className="task-item">
              <h3>hell</h3>
              <div className="btn">
                <span>✏️</span>
                <span>🗑️</span>
              </div>
            </div>
          </div>
          <div className="doing">
            <h2>Doing</h2>
          </div>
          <div className="done">
            <h2>Done</h2>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
