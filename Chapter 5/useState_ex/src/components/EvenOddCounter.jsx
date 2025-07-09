import React, { useState } from 'react'

const EvenOddCounter = () => {
    const [count,setCount] = useState(0)
  return (
    <>
    <h1> value : {count} Status : {count%2===0 ?'even':'odd' } </h1>
                <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default EvenOddCounter