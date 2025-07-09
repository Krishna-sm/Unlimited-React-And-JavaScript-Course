import React, { useState } from 'react'
import { GoHeartFill } from "react-icons/go";

const LikeUnlikeButton = () => {
    const [isLike,setIsLike] = useState(false)
  return (
    <>
    <p>
        {isLike?'like':'unlike'}
    </p>
    <button onClick={()=>setIsLike(!isLike)} >
<GoHeartFill style={{color:isLike?"red":"green"}} />
    </button>
    </>
  )
}

export default LikeUnlikeButton