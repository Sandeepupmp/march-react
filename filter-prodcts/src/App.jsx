import { useEffect, useState } from 'react'
import { items } from './item';
                    
import './App.css'

function App() {
  const filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];
  const [filterData, setFilterData] = useState(items)
  const [activefilter, setActivfilter]= useState([])
  const handelfiler = (e)=>{
   const category = e.target.id
   if(activefilter.includes(category)){
    const filter = activefilter.filter((e)=> e !== category)
    setActivfilter(filter)
   }else{
    setActivfilter([...activefilter, category])
   }
   
  }

  const filterProdcts =()=>{
    if(activefilter.length){
      const newItem = items.filter((e) => activefilter.includes(e.category))
      setFilterData(newItem)
    }else{
      setFilterData(items)
    }
  }
  useEffect(()=>{
    filterProdcts()
  },[activefilter])
  return (
    <>
      <h1>filter products</h1>
      <div className="filter"
      onClick={handelfiler}
      >
      {filters.map((item, index)=>{
       
      return(
        <button
        className={activefilter.includes(item)? "selected": null}
        id={item}
        key={index}
        
        >
       {item}
        </button>
      )
      })}
         </div>
      <div className="products-list">
         {
        filterData.map((item, index)=>{
          return(
        <div className="item" key={index}>
          <p>
            {item.name}
          </p>
          <p className='category'>
            {item.category}
          </p>
        </div>
        )
        })
      }
       </div>
    </>
  )
}

export default App
