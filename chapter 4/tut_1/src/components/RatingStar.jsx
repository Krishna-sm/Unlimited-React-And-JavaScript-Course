import React from 'react'

const RatingStar = ({no}) => {
  return (
    <>
            <div>
                {
                Array(no).fill(null).map((cur,i)=>{
                    return '★'
                })
            }
            </div>
    </>
  )
}

export default RatingStar