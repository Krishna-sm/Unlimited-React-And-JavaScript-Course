import React, { useState } from 'react'

const SubmitButton = () => {

    // const [isSubmit,setIsSubmit] = useState(false)
    const [isOn,setIsOn] = useState(true)
  return (
    <>
            {/* <button disabled={isSubmit} onClick={()=>setIsSubmit(true)}>{isSubmit?'Submitted':'Submit'}</button> */}


        {!isOn ?<img src="https://w7.pngwing.com/pngs/517/423/png-transparent-yellow-led-bulb-illustration-incandescent-light-bulb-electric-light-lighting-electric-light-bulb-light-fixture-lights-lamp.png" width={200} alt="" />: <img src="https://i.postimg.cc/KjK1wL3c/bulb-off.png" width={200} alt="" />
        }

        <button onClick={()=>setIsOn(!isOn)}>
            {isOn?'off':'on'}
        </button>


    </>
  )
}

export default SubmitButton