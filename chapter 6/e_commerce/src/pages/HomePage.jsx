import React, { useState } from 'react'
import ProductJson from '../api/products.json'
import clsx from 'clsx'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [filter,setFilter]  = useState('')
    const [search,setSearch] = useState('')


    const categories = new Set(ProductJson.map((cur,i)=>{
                    return cur.category
                }))


                // filter all product by filter state

                const products = ProductJson.filter((cur,i)=>{
                    if(!filter){
                        return cur
                    }
                    // category wise with input wise

                    if(search){
                        let x = cur.title.toLowerCase()
                        let y = cur.category.toLowerCase()
                        let z = search.toLowerCase()
                        return  cur.category == filter && (x.includes(z) || y.includes(z))
                    }

                    return cur.category == filter


                })

               
                

  return (
    <>
           
          <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">

        <div className="grid grid-cols-3 items-center">
            <ul className="flex items-center col-span-2 gap-x-3 py-4">
            <li onClick={()=>setFilter('')} className={clsx('px-3  cursor-pointer hover:bg-gray-300 py-1 rounded-full bg-gray-200',filter=='' &&"bg-gray-300")}>All</li>
            {
                [...categories].map((cur,i)=>{
                    return <li onClick={()=>setFilter(cur)} className={clsx('px-3 cursor-pointer hover:bg-gray-300  py-1 rounded-full bg-gray-200',filter==cur &&"bg-gray-300")} key={i}>{cur}</li>
                })
            }
        </ul>

                    <div className="flex col-span-1  border rounded items-center gap-x-2 ">
                        <input onChange={(e)=>setSearch(e.target.value)} type="text" className="w-full px-3 py-2  outline-none" placeholder='Search Product' />
                        <CiSearch className='text-3xl' />
                    </div>

        </div>

    <div className="grid grid-cols-3 gap-3">
     
     
            {
             products.length>0 ?   products.map((cur,i)=>{
                    return <Card key={i} data={cur} />
                }) :
                <>
                       <h1 className="col-span-3 text-center text-black font-black text-3xl">No Products </h1>
                </>
            }
       
    </div>
  </div>
</section>

    </>
  )
}

export default HomePage

const Card = ({data})=>{
    return <>
         <div className=" p-4 w-full border">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={data.image} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{data.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{data.title}</h2>
          <p className="mt-1">${data.price}</p>
          <Link to={'/product/'+data.id} className="btn">View</Link>
        </div>
      </div>
    </>
}