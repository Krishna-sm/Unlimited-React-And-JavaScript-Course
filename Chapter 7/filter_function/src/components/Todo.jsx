import React, { useState } from 'react'

const Todo = () => {

    const [todos,setTodos] = useState([])
    const [input,setInput] = useState('')
    const AddTodo=()=>{
        if(!input) return 
        setTodos([...todos,{item:input,isComplete:false}])
        setInput('')
    }

    const CompleteTodo=(index)=>{
        // const new_arr = todos.map((cur,i)=>{
        //     if(i==index){
        //         return {
        //             ...cur,
        //             isComplete:true
        //         }
        //     }
        //     return cur
        // })
        const new_arr = todos.filter((cur,i)=>i!==index)

        setTodos(new_arr)
    }

  return (
    <>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button onClick={AddTodo}>Add</button>


            <ul>
                {
                    todos.map((cur,i)=>{
                       return <li>
                            <input onClick={()=>CompleteTodo(i)} checked={cur.isComplete} type="checkbox" name="" id="" />
                            <span>{cur.item}</span>
                        </li>
                    })
                }
            </ul>
    </>
  )
}

export default Todo