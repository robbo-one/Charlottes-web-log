import React from 'react'
import Header from './Header' 
import Footer from './Footer'
import Posts from './Posts'
import OtherBlogs from './OtherBlogs'

import headerData from '../../data/header'
import footerData from '../../data/footer'
import posts from '../../data/posts'
import otherBlogsData from '../../data/other-blogs'

const App = () => {
  return (
    <div className='container'>
      <Header name={headerData.title} link={headerData.link}/>
      <Posts posts={posts}/>
      <OtherBlogs blogs={otherBlogsData}/>
      <Footer copyright={footerData.copyright} author={footerData.author}/>
    </div>
  )
}

export default App


 