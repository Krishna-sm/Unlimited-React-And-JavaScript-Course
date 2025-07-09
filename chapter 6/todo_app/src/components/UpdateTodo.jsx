import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as yup from 'yup'
import { purposes } from '../utils/constant'
import { toast } from 'react-toastify'
export default function UpdateTodo({data,setTodos,todos}) {
  let [isOpen, setIsOpen] = useState(false)
  
      const initialValues ={
          title:data.title,
          description:data.description,
          purpose:data.purpose,
          isComplete:data.isComplete
      }
      const validationSchema = yup.object({
          purpose:yup.string().required("Purpose is Required").oneOf(purposes,"Purpose should be one of"),
          title:yup.string().required("Title is Required"),
          description:yup.string().required("Description is Required")
      })
  
      const onSubmitHandler =(values,helpers)=>{

      let new_arr=   todos.map((cur,i)=>{
          if(cur.id == data.id){
            return {
              ...cur,
              ...values
            }
          }
          return cur
        })

        setTodos(new_arr)
      localStorage.setItem("todos",JSON.stringify(new_arr))

toast.success("Todo Updated !")
      }
  

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
     <button onClick={open} className="w-full py-1 my-3 text-white bg-black rounded">Update</button>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="div" className="text-base/7  flex items-center justify-between font-medium text-black">
            <p>  Update Todo</p>
            <button onClick={close} className='p-3 px-5 text-xl rounded-full text-white bg-black'>x</button>
              </DialogTitle>



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
                <div className="mb-3 flex items-center gap-x-3">
                  <Field type="checkbox" name="isComplete" id="status" />
                  <label htmlFor="status">Status</label>
                </div>
                <div className="mb-3">
                    <button className="w-full py-2 bg-black text-white rounded">Update Todo</button>
                    </div>
             </Form>
           </Formik>



             
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
