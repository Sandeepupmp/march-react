import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [principal, setPrincipal] = useState(" ")
  const [interest, setInterest] = useState("")
  const [year, setYear] = useState("")
  const [emi , setEmi] = useState(0)

  

  const handelChange = (e)=>{
    
    let valid = e.target.id 
    let value = parseFloat(e.target.value)
    if(valid === "principal" ){
       setPrincipal(value)
    }else if( valid === "interest"){
      setInterest(value)
    }else{
      setYear(value)
    }
    
  }
   
  const calculate = ()=>{
    let r = interest
    if(principal && interest && year ){
      r= r/12/100 
      const calcPow = Math.pow(1 + r, year*12)
      const amount = principal*((r * calcPow)/(calcPow -1))
      setEmi(Math.floor(amount))
      
    }
  }
  useEffect(calculate,[principal , interest , year])
  const reset = ()=>{
    setPrincipal("")
    setInterest("")
    setYear("")
    setEmi("0")
    
  }

  return (
    <>
<div className="cantaniner">
  <h1>EMI Calculator</h1>
  <div className="input-fild">
    <p>Principal</p>
    <input type="number"
    onChange={handelChange}
    value={principal}
    id="principal" placeholder='principal' />
    <p>Interest</p>
    <input type="number"
    value={interest}
     onChange={handelChange}
    id='interest' placeholder='interest' />
    <p>Year's</p>
    <input type="number"
    value={year}
     onChange={handelChange}
      id='year'placeholder='year' />
  </div>
  <div className="month">
    Your monthly interst  <p>"{emi}"</p>
  </div>
  <div className="reset">
    <button  onClick={reset}>Reset</button>
  </div>
</div>
      </>
  )
}

export default App
