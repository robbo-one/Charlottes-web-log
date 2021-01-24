import React from 'react'
 import  Header from './Header'
 import Footer from './Footer'
 import Posts from './Posts'
 import OtherBlogs from './OtherBlogs'
 

 function App (props) {
  return (
    <div className="app">
    <Header/>
    <div className="content">
    <OtherBlogs/>
    <Posts />
    </div>
    <Footer/>
    </div>
  )
}

export default App