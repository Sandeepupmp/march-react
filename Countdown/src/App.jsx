import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  
  const [isShow , setisShow] = useState(false)
  const [hours, setHours] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [puse , setPuse] = useState(true)

  const handelSubmit = (e)=>{
     let value = e.target.value 
     let id = e.target.id
     if(id === 'hour'){
      setHours(value)
     }else if( id === 'min'){
       setMin(value)
     }else{
      setSec(value)
     }

  }

  const reset = ()=>{
    setisShow(false)
  }
  const start = ()=>{
    setisShow(true)
  }

  return (
    <div className="cantanier">
      
      <div className="header">
        <h1>CountDown</h1>
      </div>
      { !isShow &&
      (<div className="input-box">
        <div className="inputs">
       <input type="number"
       onChange={handelSubmit}
       placeholder='HH' id='hour'/>
       <input type="number"
       onChange={handelSubmit}
       placeholder='MM' id='min'/>
       <input type="number"
       onChange={handelSubmit} 
       placeholder='SS' id='sec'/>
       </div>
       <button onClick={start}>Start</button>
      </div>)
       }
       { isShow && (
      <div className="timer">
       <div className="timers">
        <div>10</div>
        <span>:</span>
        <div>10</div>
        <span>:</span>
        <div>10</div>
       </div>
       <div className="conrols">
        {
          puse ? <button>Puse</button> :<button>Resume</button>
        }
        
        <button onClick={reset}>Reset</button>
       </div>
      </div>
       )}
    </div>
  )
}

export default App
