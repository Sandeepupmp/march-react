import { useState } from "react"

function Faqitem({item,index}) {
   const [show, setShow] = useState(false)

   const showbtn = ()=>{
    setShow((show)=>!show)
   }


  return (
    <div className="faq-box" >
        <div className="question">
            <button onClick={showbtn}>{show ?  "V" :">"  }</button>
            <div className="que">
                {item.question}
            </div>
        </div>
        {
            show && <div className="answer">
            {item.answer}
        </div>
        }
        
    </div>
  )
}
export default Faqitem