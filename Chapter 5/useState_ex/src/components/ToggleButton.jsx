import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const ToggleButton = () => {

    const [isShow,setIsShow] = useState(true)
    // const toggleHandler =()=>setIsShow(!isShow)
  return (
    <>
    {/* <input type={isShow?'text':'password'} name="" id="" />
   { isShow?<FaEyeSlash onClick={()=>setIsShow(!isShow)} />:<FaEye onClick={()=>setIsShow(!isShow)} />
    } */}

                {/* {isShow && <h1>Hello world</h1>}
                <button onClick={()=>setIsShow(!isShow)}>{isShow?'hide':'show'}</button> */}
    </>
  )
}

export default ToggleButton