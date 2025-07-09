import React from 'react'
import { purposes } from '../utils/constant'

const FilterTodo = ({filter,setSetFilter}) => {
  return (
    <>
     <ul className="flex gap-x-2 items-center  text-xs flex-wrap gap-y-5">
        <li onClick={()=>setSetFilter('')} className={filter==''?'bg-gray-300 px-3 py-1 rounded-full border border-gray-200   cursor-pointer':'px-3 py-1 rounded-full border border-gray-200 bg-gray-100 cursor-pointer'}>All</li>
          {
            purposes.map((cur,i)=>{ 
              return <li key={i} onClick={()=>setSetFilter(cur)} className={filter==cur?'bg-gray-300 px-3 py-1 rounded-full border border-gray-200   cursor-pointer':'px-3 py-1 rounded-full border border-gray-200 bg-gray-100 cursor-pointer'}>{cur}</li>
            })
          }
      </ul>
    </>
  )
}

export default FilterTodo