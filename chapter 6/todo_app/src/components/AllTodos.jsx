import React from 'react'
import Todo from './Todo'

const AllTodos = ({todos,setTodos,filter}) => {
  const filterData = todos.filter((cur,i)=>{
    if(!filter){
      return cur
    }
   return cur.purpose===filter
  })
  
  return (
    <>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 py-10 gap-x-3 gap-y-3">
            {
             filterData.length>0 ? filterData.map((cur,i)=>{
                return <Todo todos={todos} setTodos={setTodos} key={i} data={cur} />
              }): <h1 className='text-center text-3xl font-bold'>Todo(0)</h1>
            }
            </div>
    </>
  )
}

export default AllTodos