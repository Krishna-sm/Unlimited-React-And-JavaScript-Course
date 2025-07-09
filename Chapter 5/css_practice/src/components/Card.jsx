import React, { useState } from 'react'
import './Card.css'
import { FaRegEye } from "react-icons/fa6";
import { FiEyeOff } from "react-icons/fi";

const Card = () => {
    // const [adddClass,setAddClass] = useState(false)
    // const [selected,setSelected] = useState(0)
    // const [hide,setHide] = useState(true)
    const [selected,setSelected] = useState(0)
  return (
    <>
            <ul>
                <li onClick={()=>setSelected(1)} className={`${selected===1?'active':''}`}>Home</li>
                <li onClick={()=>setSelected(2)} className={`${selected===2?'active':''}`}>About</li>
                <li onClick={()=>setSelected(3)} className={`${selected===3?'active':''}`}>Contact</li>
            </ul>

        {selected===1&&    <h1>Home Page</h1>}
           {selected===2&&  <h1>About Page</h1>}
          {selected===3&&   <h1>Contact Page</h1>}

            {/* <div className="input">
                <input type={hide?'password':'text'} />

            <button onClick={()=>setHide(!hide)}>
                {hide?<FaRegEye/>:<FiEyeOff/>}
            </button>
            </div> */}



        {/* <button className={`${selected==1 ?'design':''}`} onClick={()=>setSelected(1)}>A</button>
        <button className={`${selected==2 ?'design':''}`} onClick={()=>setSelected(2)}>B</button>
        <button className={`${selected==3 ?'design':''}`} onClick={()=>setSelected(3)}>C</button>
        <button className={`${selected==4 ?'design':''}`} onClick={()=>setSelected(4)}>D</button> */}

    {/* <span 
    className={`${adddClass?'active':''}`}
    
    style={{
        background:'red'
    }}>CLick Here</span>
    <button onClick={()=>setAddClass(!adddClass)}>Hover me</button> */}
            {/* <div className="card">
                <h1>Hello</h1>
            </div> */}
    </>
    // <div
    //     style={{
    //         // background:'red',
    //         // // height:'40vh',
    //         // // width:'50%',
    //         // height:'200px',
    //         // width:'200px',
    //         // borderRadius:'20px 50px 80px 0px',
    //         // overflow:'hidden'
    //         // border:'1px double red'
    //         // padding:'20px 10px 5px 7px'
    //         // margin:'20px 10px 5px 7px',
    //         // color:'white',
    //         // fontSize:'50px',
    //         // textTransform:'lowercase',
    //         // boxShadow:'10px 5px black'
    //     }}
    // >Card</div>
  )
}

export default Card