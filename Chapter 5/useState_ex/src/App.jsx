import React, { useState } from 'react'
import ToggleButton from './components/ToggleButton'
import LikeUnlikeButton from './components/LikeUnlikeButton'
import HeadingChange from './components/HeadingChange'
import DarkMode from './components/DarkMode'
import SubmitButton from './components/SubmitButton'
import MultiCounters from './components/MultiCounters'
import ChangeBackground from './components/ChangeBackground'
import EvenOddCounter from './components/EvenOddCounter'
import TodoApplication from './components/TodoApplication'

const App = () => {
//     let a = 10

//     const heading = document.getElementById('counter')

//     const onIncrementHandler =()=>{
//         a++
// heading.innerText = a
//     }

const [a,seta] = useState(10)

const onIncrementHandler=()=>{
    seta(a+1)
}

const onDecrementHandler=()=>{
    seta(a-1)
}

  return (
    <>
            {/* <h1 id='counter'>{a}</h1>
            <button onClick={onIncrementHandler}>+</button>
            <button onClick={onDecrementHandler}>-</button> */}

            {/* <ToggleButton/> */}
            {/* <LikeUnlikeButton/> */}
            {/* <HeadingChange/> */}
            {/* <DarkMode/> */}
            {/* <SubmitButton/> */}
            {/* <MultiCounters/> */}
            {/* <ChangeBackground/> */}
            {/* <EvenOddCounter/> */}
            <TodoApplication/>
              <hr />
              <h1 align="center">Krishna</h1>
            <p align="center">Copyright@ {new Date().getFullYear()} </p>
    </>
  )
}

export default App