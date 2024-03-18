import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const arr = ['usd', 'eur', 'gbp', 'cny', 'jpy'];
  
  const [currency, setCurrency] = useState(0)
  const [selectedCurr , setSelectedCurr] = useState('usd')
  const [convertedCurr, setConvertedCurr] = useState(0)
  const [isUp, setIsUp] = useState(true);
  const [diff, setDiff] = useState(0);

 
  const currencyHandel = (e)=>{
    setCurrency(e.target.value)
  }
  
  const selectionHandel = (e)=>{
    setSelectedCurr(e.target.value)
  }
  
  const fetchCurrencyInfo = async ()=>{
    try {
      const url = `https://api.frontendeval.com/fake/crypto/${selectedCurr}`
       const fetchData = await fetch(url)
       const data = await fetchData.json()
       const val =  await data.value
        setConvertedCurr(currency*val)
       
       const prvVal = parseFloat( window.sessionStorage.getItem('pravVal'))
       
       const diff = (currency*val - prvVal).toFixed(2)
       console.log(diff)
       diff > 0 ? setIsUp(false) : setIsUp(true)
        setDiff(diff)
        window.sessionStorage.setItem('pravVal',currency*val.toFixed(2) )
    } catch (error) {
      console.log("Error: ", error)
    }

  }

  useEffect(()=>{
    let time;
    time = setInterval(()=>{
      fetchCurrencyInfo()
    },2000)
    return ()=>{
      clearInterval(time)
    }
  } ,[selectedCurr , currency])

  return (
    <>
     <div className="cantainer">
      <h1>Currency Converter App</h1>
      <div className="input-box">
        <input type="number" 
        onChange={currencyHandel}
        value={currency}
        />
        <select 
        name='currency'
        value={selectedCurr}
        onChange={selectionHandel}>
          {
            arr.map((cur , index)=>{
              return(
                <option key={index} value={cur} >{cur.toUpperCase()}</option>
              )
            })
          }
        </select>
      </div>
      <div className="currData">
        <div>{convertedCurr.toFixed(2)}</div>
        <div>WUC</div>
        <div className={
          isUp ? 'green' : 'red'
        }>
          <span>{isUp ? '↑' : '↓'}</span>
          <span>{diff}</span>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
