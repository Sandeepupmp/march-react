import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [inputdata , setInputData] = useState('')
  const [findData, setFindData] = useState([])
  const [list , setList] = useState([])

  const handelclick = (id)=>{
    const checkedList = [...list]
    const newCheck = checkedList.map((item)=>{
      if(item.id == id){
        item.isDone = !item.isDone;
      }

    return(
    item
    )
    })
    setList(newCheck)
  }
  const handelDel = (id)=>{
    const editList = [...list]
    const findList = editList.filter((item)=>
      item.id != id
    )
    setList(findList)
  }

  const handelSubmit = (e)=>{
    setInputData(e.target.value)
  }
 
  const url = 'https://api.frontendeval.com/fake/food/'

  const getData = async ()=>{
    const data = await fetch(`${url}${inputdata}`)
    const res =  await data.json()
    await setFindData(res)

  }
  useEffect(()=>{
    if(inputdata.length >=2){
      getData()
    }
  },[inputdata])

  const handelLisner = (e)=>{
  const id = e.target.getAttribute('data-id')
  if(id){
    const obj = {
      id: Date.now(),
      data: findData[id],
      isDone: false
    }
    
    const newList = [...list]
    newList.push(obj)
    setList(newList)
    setInputData('')
  }
  
  
}
  
  
  return (
    <>
    <div className="contaner">
      <div className="header">
      <h1>Search box</h1>
      </div>
      <div className="input-box">
       <input type="text"
       placeholder='Search '
       value={inputdata}
       onChange={handelSubmit}
       />
      </div>
     { inputdata.length >=2 ? 
      <div className="suggeson"
      onClick={handelLisner}
      >
            {
              findData.map((item, index)=>{
                return(
                 <div className="prodcats" key={index}
                 data-id={index}
                 >
                         {item}
                 </div>
                )
              })
            } 
       </div> 
       : null
     }
     <div className="buketList">
      {
        list.map((item)=>{
            return(
              <div className="buketBox" key={item.id}>
                <button onClick={()=> handelclick(item.id)}>✓</button>
                <div className={item.isDone ? "strik list" : "list"}>{item.data}</div>
                <button onClick={ ()=> handelDel(item.id)}>X</button>
              </div>
            )
        })
      }
     </div>
    </div>
      
    </>
  )
}

export default App
