import React from 'react'

const App = () => {
  const fruits = ['Apple', 'Banana', 'Orange','Apple'];
  const students = ['Ravi', 'Anjali', 'Mohan'];
  const numbers = [1, 2, 3, 4]
  const buttons_arr = ['Start', 'Pause', 'Reset']
  const colors = ['Red', 'Green', 'Blue'];
  return (
   <>

   <ul>
    {
      colors.map((cur,i)=>{
        return <p>Color {i+1}: {cur}</p>
      })
    }
   </ul>

   {/* {
    buttons_arr.map((cur,i)=>{
      return <button key={i} onClick={()=>alert(`You clicked ${cur}`)}>{cur}</button>
    })
   } */}
   {/* {
    Array(10).fill(0).map((_,i)=>{
      return <p>5X{i+1} = {5*(i+1)}</p>
    })
   } */}
  {/* {
    numbers.map((cur,i)=>{
      return <p>{cur}X{i+1}={cur*(i+1)}</p>
    })
  } */}
      {/* {
        students.map((cur,i)=><Card name={cur} key={i} />)
        // students.map(Card)
      } */}
        {/* <ul>
          {
            fruits.map((cur,i)=>{
              return <li key={i}>{cur}</li>
            })
          }
        </ul> */}
   </>
  )
}

export default App

const Card =({name})=>{
  return  <h1 style={{background:'red','color':'white'}}>{name}</h1>
}
// const Card =({name})=>{
//   return  <h1 style={{background:'red','color':'white'}}>{name}</h1>
// }