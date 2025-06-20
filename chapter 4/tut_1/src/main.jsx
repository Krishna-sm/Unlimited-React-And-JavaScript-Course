import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const rootContainer  = document.querySelector("#root")

const root = ReactDOM.createRoot(rootContainer)
// html + Javascript => JavaScript Extension Markup Language




// root.render(<div>App()App()</div>)
root.render(<React.Fragment> <App/>   </React.Fragment>)
// root.render(<A pp/>)