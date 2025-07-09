import React, { useEffect, useState } from 'react'
import AllChats from './components/AllChats'
import AddChat from './components/AddChat'
import LoginForm from './components/LoginForm'

const App = () => {
  const [chats,setChats]  = useState(JSON.parse(localStorage.getItem("chats") || "[]"))
  const [user,setUser] = useState('')

  const addNewChat=(message)=>{
      const chat={
        message,
        created_at:Date.now(),
        user:user
      }
      let new_chat = [...chats,chat]
      setChats(new_chat)
      localStorage.setItem("chats",JSON.stringify(new_chat))

  }

  useEffect(()=>{
      window.addEventListener('storage',(e)=>{
        if(e.key ==="chats"){
          // console.log("data nya aaya ahi");
            const chatsData = JSON.parse(localStorage.getItem("chats") || "[]")
          setChats(chatsData)
        }
      })
      return ()=>{
        window.removeEventListener("storage",(e)=>{})
      }

  },[])

  return (
    <>
            <div className="flex items-center justify-center h-screen ">
             <div className="flex flex-col w-[96%] lg:w-1/2 justify-center items-center border rounded">
             <h1 className="text-center text-4xl font-jbold py-2">Chat App {user} </h1>

                  {
                    user ? <>
                     <AllChats chats={chats}  user={user}/>
            <AddChat addNewChat={addNewChat} />
                    </>:<>
                          <LoginForm setUser={setUser} />
                    </>
                  }
             
             </div>
            </div>
    </>
  )
}

export default App