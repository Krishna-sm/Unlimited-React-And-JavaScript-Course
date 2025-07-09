import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SingleViewPage from './pages/SingleViewPage'
import CartPage from './pages/CartPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { toast } from 'react-toastify'
const App = () => {

  const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart") ||"[]"))

  const AddToCart=({
    title,
    image,
    qty=1,
    price,
    id
  })=>{

    let findExist = cart.find((cur,i)=>cur.id ==id)
    if(findExist){
      //modify old cart and increment qty 
      const new_data =cart.map((cur,i)=>{
        if(cur.id== id){
          return{
            ...cur,
            qty:cur.qty+1
          }
        }
        return cur
      })
    setCart(new_data)
          localStorage.setItem("cart",JSON.stringify(new_data))

    toast.success("Quantity Increased !")
return
    }
    
    let new_data = [...cart,{
       title,
    image,
    qty,
    price,
    id
    }

    ]
    setCart(new_data)
          localStorage.setItem("cart",JSON.stringify(new_data))

    toast.success("Item Added Into Cart !")

  }
  const RemoveToCart=(id)=>{
      let findExist = cart.find((cur,i)=>cur.id ==id)
     if(!findExist) return
    //  if qty already is 1 then it hit for decrease

    
      const new_data = cart.filter((cur,i)=>cur.id != id)
          setCart(new_data)
          localStorage.setItem("cart",JSON.stringify(new_data))
    toast.success("Item Removed !")
    return
 
  }
  const IncrementCart=(id)=>{
     let findExist = cart.find((cur,i)=>cur.id ==id)
     if(!findExist) return
 
      //modify old cart and increment qty 
      const new_data =cart.map((cur,i)=>{
        if(cur.id== id){
          return{
            ...cur,
            qty:cur.qty+1
          }
        }
        return cur
      })
    setCart(new_data)
          localStorage.setItem("cart",JSON.stringify(new_data))

    toast.success("Quantity Increased !")
 
}
  const DecrementCart=(id)=>{
      let findExist = cart.find((cur,i)=>cur.id ==id)
     if(!findExist) return
    //  if qty already is 1 then it hit for decrease

    if(findExist.qty<=1){
      const new_data = cart.filter((cur,i)=>cur.id != id)
          setCart(new_data)
          localStorage.setItem("cart",JSON.stringify(new_data))

    toast.success("Item Removed !")
    return
    }
 
      //modify old cart and increment qty 
      const new_data =cart.map((cur,i)=>{
        if(cur.id== id){
          return{
            ...cur,
            qty:cur.qty-1
          }
        }
        return cur
      })
    setCart(new_data)
          localStorage.setItem("cart",JSON.stringify(new_data))

    toast.success("Quantity Increased !")
 
  }


  return (
    <>
    <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/product/:id' element={<SingleViewPage  addCart={AddToCart} />} />
            <Route path='/cart' element={<CartPage cart={cart} DecrementCart={DecrementCart}  IncrementCart={IncrementCart}  RemoveToCart={RemoveToCart}/>} />
        </Routes>
        {/* <HomePage/> */}
        {/* <SingleViewPage/> */}
        {/* <CartPage/> */}
        </BrowserRouter>
    </>
  )
}

export default App