import React, { useState } from 'react'
import { toast } from 'react-toastify'

const LoginForm = ({setUser}) => {

    const [input,setInput] = useState(0)
    const JoinHandler =()=>{
        if(input<=0){
            toast.error("Enter Valid user")
            return
        }
        setUser(input)
    }
  return (
    <>
            <div className="w-full py-4 px-3 lg:px-10 flex flex-col gap-y-5">
                <input  onChange={(e)=>setInput(e.target.value)} type="number" className="w-full  py-2 outline-none border rounded px-4" />
                <button onClick={JoinHandler} className='w-full py-3 bg-black text-white rounded'>Join</button>
            </div>
    </>
  )
}

export default LoginForm