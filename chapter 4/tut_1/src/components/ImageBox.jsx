import React from 'react'

const ImageBox = ({imgURL,caption,alt}) => {
  return (
    <>
                <figure>
                    <img src={imgURL} alt={alt} />
            <figcaption>
                {caption}
            </figcaption>
                </figure>
    </>
  )
}

export default ImageBox