import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [twoMetricx, setTwoMetrics] = useState([])

  const pripearTwoMetrics = ()=>{

  }

  useEffect(()=>{
  pripearTwoMetrics()
  
  },[])

  return (
    <>
    <div className="app">
      <h1>Selectebal grid</h1>
      <div className="grid">
        <div className="board">

        </div>
      </div>
    </div>
    </>
  )
}

export default App
