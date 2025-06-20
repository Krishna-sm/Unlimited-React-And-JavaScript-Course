import React from 'react'

const Book = ({title,author,year}) => {
  return (
    <>
            <h1 align={'center'}>{title}</h1>
            <p align={'center'}>{author}</p>
            <p align={'center'}>{new Date(year).getFullYear()}</p>
    </>
  )
}

export default Book