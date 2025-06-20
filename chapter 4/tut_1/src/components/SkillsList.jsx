import React from 'react'

const SkillsList = ({arr}) => {
  return (
    <>
          {
            arr.map((cur,i)=>{
                return <h1>{cur}</h1>
            })
          }
    </>
  )
}

export default SkillsList