import React, { useState } from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as yup from 'yup'
import { purposes } from '../utils/constant'
import { toast } from 'react-toastify'
const AddTodo = ({todos,setTodos}) => {





    const initialValues ={
        title:'',
        description:'',
        purpose:purposes[0]
    }
    const validationSchema = yup.object({
        purpose:yup.string().required("Purpose is Required").oneOf(purposes,"Purpose should be one of"),
        title:yup.string().required("Title is Required"),
        description:yup.string().required("Description is Required")
    })

    const onSubmitHandler =(values,helpers)=>{
        try {
          
      const item = {
        ...values,
        isComplete:false,
        id:Date.now(),
        created_at:Date.now()
      }

      let new_arr= [...todos,item]
      setTodos(new_arr)
      localStorage.setItem("todos",JSON.stringify(new_arr))
      helpers.resetForm()
      toast.success("Todo Added !")
        } catch (error) {
          toast.error(error.message)
        }
    }

  return (
    <>
           <Formik
           initialValues={initialValues}
           validationSchema={validationSchema}
           onSubmit={onSubmitHandler}
           >
             <Form className=" w-full py-5 ">
                <div className="mb-3">
                    <label htmlFor="title">Title</label>
                    <Field name="title" type="text" className="w-full py-2 px-3 rounded outline-none border" placeholder='Enter Todo Title' />
                    <ErrorMessage name='title' component={'p'} className='text-red-500 text-xs' />
                </div>
                  <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <Field as="textarea" rows="3" name="description" type="text" className="w-full py-2 px-3 rounded outline-none border" placeholder='Enter Todo Description' />
                    <ErrorMessage name='description' component={'p'} className='text-red-500 text-xs' />
                </div>
                <div className="mb-3">
                    <label htmlFor="purpose">Purpose</label>
                    <Field as="select"   name="purpose" type="text" className="w-full py-2 px-3 rounded outline-none border" >

                    {
                        purposes.map((cur,i)=>{
                            return <option key={i} value={cur}>{cur}</option>
                        })
                    }

                    </Field>
                    <ErrorMessage name='purpose' component={'p'} className='text-red-500 text-xs' />
                </div>
                <div className="mb-3">
                    <button type='submit' className="w-full py-2 bg-black text-white rounded">Add Todo</button>
                    </div>
             </Form>
           </Formik>
    </>
  )
}

export default AddTodo