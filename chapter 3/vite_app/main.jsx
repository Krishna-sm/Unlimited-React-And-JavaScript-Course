import React from 'react'
import {createRoot} from 'react-dom/client'

const react_container = document.querySelector('.app')

const root = createRoot(react_container)

const Welcome = ({name})=> <h1>Hello Hi this is Krishna {name} </h1>

// root.render(Welcome({name:'Harish'}))
root.render(<Welcome name="Hari Dev Sharma" />)