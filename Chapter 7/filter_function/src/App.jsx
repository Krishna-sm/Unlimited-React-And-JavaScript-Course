import React from 'react'
import { useState } from 'react'
import Todo from './components/Todo'

const App = () => {

  const [input,setInput] = useState('')
  let names=   ['Aman', 'Ravi', 'Sita', 'Krish']
  const isContain =(str)=>{

    let x = str.toLowerCase()
   return x.includes(input) || x.startsWith(input) || x.endsWith(input)
  }

  return (
    <>

    <Todo/>
        {/* <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
        <ul>
        {
          names.filter(c=>isContain(c)).length>0 ?  names.filter(c=>isContain(c)).map((cur,i)=>{
            return <li>{cur}</li>
          }):
          <h1>No Result Found</h1>
        }
        </ul> */}
    </>
  )
}

export default App