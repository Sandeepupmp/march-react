import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsernameSystem from './components/User'

// ✏️ 🗑️
// ref https://github.com/imran-mind/reactjs-frontendeval-challenges/blob/main/task-app-drag-n-drop/src/App.js 


function App() {

  const TODO = 'todo';
  const DOING = 'doing';
  const DONE = 'done';
  const [value, setvalue] = useState('')
  const [list, setList] = useState([])
  const [title, setTitle] = useState([])


  const handelSubmit = (e) => {
    setvalue(e.target.value)
  }
  const handelkey = (e) => {

    if (e.keyCode === 13) {
      const obj = {
        title: value,
        status: TODO,
        id: Date.now()
      }
      if (obj.title.length > 0) {

        setList((prev) => [...prev, obj])
        setvalue('')
      } else {
        window.alert("Plz.. ineter some value")
      }
    }
  }
  const handelDrag = (e, item) => {
    console.log(item, e)
  }
  return (
    <>

      <div className="app">

        <h1 className='task-h'>Task Manager</h1>
        <input type="text" className='main-input' placeholder='Add some task'
          onChange={handelSubmit}
          onKeyDown={handelkey}
          value={value}
        />
        <div className="borad">
          <div className="todo">
            <h2 className=''>Todo</h2>
            {
              list.length > 0 && list.map((item) => {
                return (
                  item.status === TODO && <div className="task-item"
                    onDrag={(e) => handelDrag(e, item)}
                    draggable
                    key={item.id}>
                    {item.title}
                    <div className="btn">
                      <span>✏️</span>
                      <span>🗑️</span>
                    </div>
                  </div>
                )
              })
            }

          </div>

          <div className="doing">
            <h2>Doing</h2>
            {
              list.length > 0 && list.map((item) => {
                return (

                  item.status === DOING && <div className="task-item"
                    draggable
                    key={item.id}>
                    {item.title}
                    <div className="btn">
                      <span>✏️</span>
                      <span>🗑️</span>
                    </div>
                  </div>
                )
              })
            }

          </div>
          <div className="done">

            <h2>Done</h2>
            {
              list.length > 0 && list.map((item) => {
                return (

                  item.status === DONE && <div className="task-item"
                    draggable
                    key={item.id}>
                    {item.title}
                    <div className="btn">
                      <span>✏️</span>
                      <span>🗑️</span>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>

      </div>
    </>
  )
}

export default App
