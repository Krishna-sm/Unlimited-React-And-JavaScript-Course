import React from 'react'

const FruitList = (props) => {
  return (
    <>
                <ul>
                    {
                        props.fruits.map((cur,i)=>{
                            return <li>{cur}</li>
                        })
                    }
                </ul>
    </>
  )
}

export default FruitList