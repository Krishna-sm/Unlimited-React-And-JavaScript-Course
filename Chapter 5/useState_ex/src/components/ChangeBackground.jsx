import React, { useState } from 'react'

const ChangeBackground = () => {
    const [color,setColor] = useState('red')
  return (
    <>
            <div style={{
                background:color,
                height:'200px'
            }}></div>

            <button onClick={()=>setColor('red')}>REd</button>
            <button onClick={()=>setColor('green')}>Green</button>

            <input onChange={(e)=>setColor(e.target.value)} type="color" name="" id="" />
    </>
  )
}

export default ChangeBackground