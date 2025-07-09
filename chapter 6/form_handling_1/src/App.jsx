import React, { useState } from 'react'
import { toast } from 'react-toastify'

const App = () => {

  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')
  // const [subject,setSubject] = useState('')
  // const [message,setMessage] = useState('')

  const [state,setState] = useState({
    name:'',
    email:"",
    subject:'',
    message:''
  })

  const onChangeHandler =(e)=>{

     setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  //  if(e.target.name ==="name"){
  //   setState({
  //     ...state,
  //     name:e.target.value,
  //   })
  //  }else if(e.target.name ==="email"){
  //   setState({
  //     ...state,
  //     email:e.target.value,
  //   })
  //  }else  if(e.target.name ==="subject"){
  //   setState({
  //     ...state,
  //     subject:e.target.value,
  //   })
  //  }else  if(e.target.name ==="message"){
  //   setState({
  //     ...state,
  //     message:e.target.value,
  //   })
  //  }
  }

  const onSubmitHandler =(e)=>{
        e.preventDefault()

        try {
          // name ke liye validateion 
        if(state.name ===''){
          throw new  Error("Name must be required")
        }
        // for email validateion 
        if(state.email ==''){
          throw new Error("Email must be required")
        }
        if(!state.email.includes("@")){
          throw new Error("EMail must be a valid email")
          
        }
          if(!state.email.endsWith("@gmail.com")){
          throw new Error("EMail must be a valid gmail")
          
        }

        // subject 
        if(!state.subject){
          throw new Error("Subject is Required")
        }

         // message 
        if(!state.message){
          throw new Error("Message is Required")
        }
         if(state.message.length<10){
          throw new Error("Message should be greater than 10 characters")
        }


        // is point par par sara data validate hain
        toast.success("Form Submitted")

        // setName('')
        // setEmail('')
        // setSubject('')
        // setMessage('')
        setState({
    name:'',
    email:"",
    subject:'',
    message:''
  })


        } catch (error) {
            toast.error(error.message)
        }


  }

  return (
    <>
        <div className="w-full bg-orange-100 justify-center flex h-screen items-center">

          <form onSubmit={onSubmitHandler} action="" className='py-6 px-2 bg-white border w-1/3'>
             <div className="">
            <label htmlFor="name">Name</label>
            <input
            value={state.name}
            onChange={onChangeHandler}
            type="text" id='name' name='name' placeholder='Enter Your Name' className='w-full outline-none border py-1 rounded px-3' />
          </div>
            <div className="">
            <label htmlFor="email">Email</label>
            <input type="text"
            value={state.email}
            onChange={onChangeHandler}
            
            id='email' name='email' placeholder='Enter Your Email' className='w-full outline-none border py-1 rounded px-3' />
          </div>
           <div className="">
            <label htmlFor="subject">Subject</label>
            <input
            value={state.subject}
            onChange={onChangeHandler}
            
            type="text" id='subject' name='subject' placeholder='Enter Your Subject' className='w-full outline-none border py-1 rounded px-3' />
          </div>
           <div className="">
            <label htmlFor="message">Message</label>
            <textarea
            value={state.message}
            onChange={onChangeHandler}
             type="text" id='message' name='message' placeholder='Enter Your Message'  className='w-full outline-none border py-1 rounded px-3'></textarea>
          </div>
          <div className="">
            <button type='submit' className='w-full py-1 text-center bg-indigo-500 rounded text-white'>Submit</button>
          </div>
          </form>
      

        </div>
    </>
  )
}

export default App