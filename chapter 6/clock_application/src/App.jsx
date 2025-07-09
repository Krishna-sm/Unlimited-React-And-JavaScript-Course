import React, { useEffect, useState } from 'react'

const App = () => {


  const [date,setDate] = useState( new Date() )

  useEffect(()=>{
   const p1= setInterval(function(){
    const d1  = new Date() 
    setDate(d1)
  },1000)

  return ()=>{
    clearInterval(p1)
  }

  },[])



  return (
    <>
          <h1 className='text-[10rem] text-center font-black'>{`${date.getHours()}`.padStart(2,'0')}:{`${date.getMinutes()}`.padStart(2,'0')}:{`${date.getSeconds()}`.padStart(2,'0')} {date.getHours()<12?'AM':'PM'}</h1>
    </>
  )
}

export default App