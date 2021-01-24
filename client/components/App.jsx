import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Post from './Post'

import headerData from '../../data/header'
import footerData from '../../data/footer'
import postData from '../../data/posts'

const App = () => {
  return (
    <div className='container'>
      <Header name={headerData.title} link={headerData.link}/>
      <Footer copyright={footerData.copyright} author={footerData.author}/>
      <Post 
    </div>
  )
}

export default App