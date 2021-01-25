import React from 'react'


import Header from './Header'
import headerData from '../../data/header'

import Footer from './Footer'
import footerData from '../../data/footer'

import Posts from './Posts'
import postsData from '../../data/posts'

import OtherBlogs from './OtherBlogs'
import otherBlogData from '../../data/other-blogs'



export default function App(props) {
  return (
    <div>
      <Header title={headerData.title} link={headerData.link} />
      <div className='body-container'>
        <div className="other-blog-container">
          <OtherBlogs blogs={otherBlogData}/>
        </div>
        <div className='post-container'>
        <h1>Post Post, Baby</h1>
          <Posts posts={postsData} />
        </div>
      </div>
      <Footer copyright={footerData.copyright} author={footerData.author} />
    </div>
  )
}