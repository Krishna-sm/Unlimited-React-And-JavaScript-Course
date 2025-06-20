import React from 'react'

const ListOfMovies = () => {
  return (
    <>
            <ul type="circle">
                <li>Dilbhaag</li>
                <li>Dilwala</li>
                <li>Krish 2</li>
                <li>Krish 3</li>
                <li>Dhoom 3</li>
            </ul>

              <ol type='A' start={95}>
                <li>Dilbhaag</li>
                <li>Dilwala</li>
                <li>Krish 2</li>
                <li>Krish 3</li>
                <li>Dhoom 3</li>
            </ol>
    </>
  )
}

export default ListOfMovies