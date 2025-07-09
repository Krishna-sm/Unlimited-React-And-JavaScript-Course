import React, { useEffect } from 'react'
import moment from 'moment'
import clsx from 'clsx'
const AllChats = ({chats,user}) => {


    useEffect(()=>{
                const chatContainer = document.getElementById("chatContainer")

                chatContainer.scrollTo({top:chatContainer.scrollHeight+60})

    },[chats])

  return (
    <div id='chatContainer' className='h-[50vh] w-full flex flex-col gap-y-3 py-3 px-3 overflow-auto'>
                {
                    chats.map((cur,i)=>{
                        return <ChatCard key={i} data={cur} myChat={cur.user==user} />
                    })
                }

    </div>
  )
}

export default AllChats


const ChatCard =({myChat,data})=>{
    return <div className={clsx("w-full flex items-center ",myChat?'justify-end':'justify-start')}>
        <div className='w-1/2 '>
            <p className='bg-black text-white py-3 px-4 rounded-md'>{data.message}</p>
            <p className="text-end text-zinc-400 text-sm">{moment(new Date(data.created_at)).fromNow()  }</p>
        </div>
    </div>
}
