import React from 'react'
 import  Header from './Header'
 import Footer from './Footer'
 import Posts from './Posts'


 function App (props) {
  return (
    <div className="app">
    <Header/>
    <Posts />
    <Footer/>
    </div>
  )
}

export default App