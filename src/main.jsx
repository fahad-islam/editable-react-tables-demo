import React from 'react'
import ReactDOM from 'react-dom/client'
import reactToWebcomponent from 'react-to-webcomponent'
import App from './App'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

const WebGreetings = reactToWebcomponent(App, React, ReactDOM)

customElements.define("web-greetin", WebGreetings)

//! IMPORTANT: comment this line before running `npm run build`
var myGreetings = new WebGreetings()
document.body.appendChild(myGreetings)