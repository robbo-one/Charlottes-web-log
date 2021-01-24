import React from 'react'
 import  Header from './Header'


 function App (props) {
  return (
    <div className="app">
    <Header/>
    <h1>{props.message.text}</h1>
    </div>
  )
}

export default App