import React, { useState } from 'react'
import { toast } from 'react-toastify'
import {Formik,Form,ErrorMessage, Field} from 'formik'
import * as yup from 'yup'
const App = () => {
  
  const initialValues = {
    name:'',
    email:'',
    subject:'',
    message:''
  }
  // formik +yup
  // react hook form +zod

  const validationSchema = yup.object({
    name:yup.string().required("Name is Required"),
    email:yup.string().required("Email is Required").email("Email must a valid Email"),
    subject:yup.string().required("Subject is Required"),
    message:yup.string().min(10,"Message should be grater than 10 characters").required("Message is Required")
  })


  const onSubmitHandler =(values,helpers)=>{
    console.log(values)
    helpers.resetForm()
  }

  return (
    <>
        <div className="w-full bg-orange-100 justify-center flex h-screen items-center">

         <Formik
         
         onSubmit={onSubmitHandler}
         validationSchema={validationSchema}
  initialValues={initialValues}
         >
           <Form  action="" className='py-6 px-2 bg-white border w-1/3'>
             <div className="">
            <label htmlFor="name">Name</label>
            <Field
          
            type="text" id='name' name='name' placeholder='Enter Your Name' className='w-full outline-none border py-1 rounded px-3' />
            <p className='text-sm text-red-500'><ErrorMessage name='name' /></p>
          </div>
            <div className="">
            <label htmlFor="email">Email</label>
            <Field type="text"
          
            
            id='email' name='email' placeholder='Enter Your Email' className='w-full outline-none border py-1 rounded px-3' />
            <p className='text-sm text-red-500'><ErrorMessage name='email' /></p>

          </div>
           <div className="">
            <label htmlFor="subject">Subject</label>
            <Field
           
            
            type="text" id='subject' name='subject' placeholder='Enter Your Subject' className='w-full outline-none border py-1 rounded px-3' />
            <p className='text-sm text-red-500'><ErrorMessage name='subject' /></p>

          </div>
           <div className="">
            <label htmlFor="message">Message</label>
            <Field
            as="textarea"
             type="text" id='message' name='message' placeholder='Enter Your Message'  className='w-full outline-none border py-1 rounded px-3'/>
            <p className='text-sm text-red-500'><ErrorMessage name='message' /></p>

          </div>
          <div className="">
            <button type='submit' className='w-full py-1 text-center bg-indigo-500 rounded text-white'>Submit</button>
          </div>
          </Form>
         </Formik>
      

        </div>
    </>
  )
}

export default App