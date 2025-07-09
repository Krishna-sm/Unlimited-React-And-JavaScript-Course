import React, { useState } from 'react'

const HeadingChange = () => {
  const [changeContent,setchangeContent]  = useState('Hello my name is Krishna')
  const [index,setIndex] = useState(0)
  const arr = [
    'red',
    'green',
    'blue',
    'pink',
    'brown'
  ]
  return (
    <>
          <h1
          style={{
            color:arr[index]
          }}
          >{changeContent}</h1>
          <button onClick={()=>{
            setchangeContent('Hello my name is Rishank')
            setIndex(Math.floor(Math.random()*arr.length))
          }}>Change</button>
    </>
  )
}

export default HeadingChange