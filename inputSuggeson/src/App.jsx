import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [input, setinput] = useState('')
  const [list, setList] = useState('')
  const [collect, setCollect] = useState([])
  const url =  `https://api.frontendeval.com/fake/food/${input}`

 const handelChange = (e)=>{
  const val = e.target.value
  setinput(val)
 }
 const findData = async ()=>{
  try {
    const fetechData = await fetch(url)
    const data = await fetechData.json();
    setList(data)

  }
  catch (error){
    console.log('error', error)
  }
}
   const clickChecker = (e)=>{
    const clicked = e.target.id.toUpperCase()
    if(collect.includes(clicked)){
      window.alert(`${clicked} is already added `)
    }else{
      setCollect([...collect, clicked])
      
    }
   }
   
    useEffect(()=>{
      if(input.length){
        findData()
      }
    
    },[input])

  return (
    <>
     <div className="cantainer">
      <h1>Auto Suggestion Box</h1>
      <input type="text" placeholder='Search Heare'
      onChange={handelChange}/>
      <div className="suggestionbox"
      onClick={clickChecker}
      
      >
       { list.length>0 &&
        list.map((item, index)=>{
            return(
              
              <div className="item"
              key={index}
              id={item}>
                
                {item}

              </div>
            )
        })
       }
      </div>
      </div>
      {collect.length>0 && 
      <div className="collector">
        { 
          collect.map((item, index)=>{
            return(
              <div className="data"
              key={index}
              >
                
                {item}
              </div>
            )
          })
        }
      
        </div> 
}
      
    </>
  )
}

export default App
