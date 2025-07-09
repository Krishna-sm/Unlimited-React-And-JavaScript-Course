import React, { useState } from 'react'

const MultiCounters = () => {
    const [a,setA] = useState(0)
    const [b,setb] = useState(0)
    const [c,setc] = useState(0)
  return (
    <>
                <button onClick={()=>setA(a+1)}>+1 {a}</button>
                <button onClick={()=>setb(b+5)}>+5 {b} </button>
                <button onClick={()=>setc(c+6)}>+6 {c} </button>
    </>
  )
}

export default MultiCounters