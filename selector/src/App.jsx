import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [twoMetricx, setTwoMetrics] = useState([])

  const pripearTwoMetrics = ()=>{
    const matrix = []

    for(let i=0; i<=9; i++){
      for(let j =0 ; j<=9; j++){
        const obj = {
          pos: [i, j], 
          isColor: false
        }
        matrix.push(obj)
        
      }
    }
    setTwoMetrics(matrix)

  }
  
  console.log(twoMetricx)
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
