import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = ({cart}) => {
  return (
    <>
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to={'/'} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <CiShoppingCart className='text-3xl' />
      <span class="ml-3 text-xl">CartWithKrishna</span>
    </Link>

    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">

      <Link to={'/'} class="mr-5 hover:text-gray-900">Home</Link>  
      <Link to={'/cart'} class="mr-5 hover:text-gray-900">Cart <strong>({cart.length})</strong> </Link> 
    </nav>
   
  </div>
</header>
    </>
  )
}

export default Navbar