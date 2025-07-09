import React, { useState } from 'react'
import '../styles/DarkMode.css'
const DarkMode = () => {
    const [isDark,setIsDark] = useState(true)
  return (
    <>
    <h1
    className={isDark?'dark':"light"}
    >{isDark?'Dark':'Light'} Mode ENabled</h1>
                <button onClick={()=>setIsDark(!isDark)}>{!isDark?'dark':"light"}</button>
    </>
  )
}

export default DarkMode