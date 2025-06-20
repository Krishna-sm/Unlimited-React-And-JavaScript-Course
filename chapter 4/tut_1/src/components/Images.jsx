import React from 'react'
import DoremonImage from '../images/doremon.png'
const Images = () => {
  return (
    <>
            <img src="/vite.svg" alt="" />
            <img src="/image.png" width={500} height={200} alt="" />
            <img src="https://www.justbake.in/userfiles/doraemon-cake.jpg" alt="" />

            <img src={DoremonImage} alt="" />
    </>
  )
}

export default Images