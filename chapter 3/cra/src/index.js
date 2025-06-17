import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcome from './App.js'

const reactContainer = document.querySelector('.react')

const root = ReactDOM.createRoot(reactContainer)



// root.render(Welcome())
root.render(<Welcome/>)