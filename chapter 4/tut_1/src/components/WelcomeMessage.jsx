import React from 'react'

const WelcomeMessage = ({language}) => {

    if(language=="hi"){
        return "Namaste"
    }
     else if(language=="en"){
        return "Good Morning"
    }
    else if(language=="ch"){
        return "Ni How"
    }
  return (
    <div>No Define</div>
  )
}

export default WelcomeMessage