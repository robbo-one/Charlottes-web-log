import React from 'react'
import Header from './Header'
import Footer from "./Footer"
import Posts from './Posts'
import OtherBlogs from './OtherBlogs'

import headerData from '../../data/header'
import footerData from "../../data/footer"
import postData from  '../../data/posts'
import otherBlogsData from '../../data/other-blogs'



const App = (props) => {
  return (
    <div>
      <Header title={headerData.title} link={headerData.link} />
      <div className='blogContent'>
        <OtherBlogs blogs={otherBlogsData} /> 
        <Posts posts={postData} />
      </div>
      <Footer copyright={footerData.copyright} author={footerData.author} />
    </div>
  )
}

export default App