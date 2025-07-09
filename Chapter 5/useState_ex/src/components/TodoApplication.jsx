import React, { useState } from 'react'

const TodoApplication = () => {
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("todos") || "[]"))
  const [input,setInput]= useState('')
  const AddTodo=()=>{
    setInput('')
    setTodos([...todos,input])
    localStorage.setItem("todos",JSON.stringify([...todos,input]))
  }
  const deleteTodo=(id)=>{
    // let old_todo =todos

    // old_todo.splice(id,1)
    // console.log(old_todo);

    let new_todo =todos.filter((cur,i)=>i!=id)
    
    setTodos(new_todo)
    localStorage.setItem("todos",JSON.stringify(new_todo))

  }


  const UpdateTodo=(id,data)=>{
        let new_data = todos.map((cur,i)=>{
          if(i ==id){
            return data
          }
          return cur
        })
    setTodos(new_data)
    localStorage.setItem("todos",JSON.stringify(new_data))


  }

  return (
    <>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
        <button onClick={AddTodo}>add</button>

        <ul>
         {
          todos.map((cur,i)=>{
        
            return <Todo data={cur} onDelete={()=>deleteTodo(i)} onUpdate={(data)=>UpdateTodo(i,data)}  />
          })
         }
        </ul>
    </>
  )
}

export default TodoApplication


const Todo = (prop)=>{
      const [isUpdate,setIsUpdate] = useState(false)
      const [value,setValue] = useState(prop.data)
      return <li>
              {isUpdate?<input type="text" value={value}
                onChange={(e)=>setValue(e.target.value)}
              /> : <span>{prop.data}</span> }
              {isUpdate?  <button
                onClick={()=>{
                  prop.onUpdate(value)
                  setIsUpdate(false)
                }}
              >Update New</button>:<button onClick={()=>setIsUpdate(true)}>Update</button> }
               <button onClick={prop.onDelete}>delete</button> 
               
               </li>
}