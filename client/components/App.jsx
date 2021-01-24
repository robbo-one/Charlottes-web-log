import React from 'react'
 import  Header from './Header'
 import Footer from './Footer'


 function App (props) {
  return (
    <div className="app">
    <Header/>
    <h1>{props.message.text}</h1>
    <Footer/>
    </div>
  )
}

export default App