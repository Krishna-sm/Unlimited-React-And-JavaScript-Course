import React from 'react'
import UpdateTodo from './UpdateTodo'
import { toast } from 'react-toastify'

const Todo = ({data,setTodos,todos}) => {

  const onDeleteHandler = ()=>{
    let new_arr =todos.filter((cur,i)=>cur.id!=data.id)
    setTodos(new_arr)
      localStorage.setItem("todos",JSON.stringify(new_arr))

    toast.success("Delete Success")
  }


  return (
    <div className='w-full border border-gray-200 bg-gray-100 p-4 '>
        <h3 className="text-xl font-medium capitalize">{data.title} {data.isComplete?'✅':'❌'} </h3>
        <p className="text-sm font-thin">{data.description}</p>
   
   <p className="flex items-center justify-between">
         <span className="px-2 text-xs py-1 rounded-full bg-rose-500 text-white">{data.purpose}</span>
         <span className="text-xs text-zinc-700">{new Date(data.created_at).toDateString()}</span>
   </p>
    <UpdateTodo data={data} todos={todos} setTodos={setTodos} />


   <button onClick={onDeleteHandler} className="w-full py-1  text-white bg-red-500 rounded">Delete</button>



    </div>
  )
}

export default Todo