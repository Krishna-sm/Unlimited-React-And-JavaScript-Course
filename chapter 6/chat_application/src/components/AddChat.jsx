import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddChat = ({addNewChat}) => {

    const [chat,setChat]  = useState('')
    const chatHandler =()=>{
        if(!chat)return 
        addNewChat(chat)
        setChat('')
        toast.success("Message Sent !")
    }

  return (
    <div className='w-full flex border-t border-t-gray-500'>
        <input value={chat} onChange={(e)=>setChat(e.target.value)} type="text" className='w-full outline-none  py-3 px-3' placeholder='Enter Message...' /> <button disabled={!chat} onClick={chatHandler} className="bg-black px-6 disabled:bg-gray-800  text-white">Add</button>
    </div>
  )
}

export default AddChat