import React from 'react'
import Header from './Header' 
import Footer from './Footer'
import Posts from './Posts'
import OtherBlogs from './OtherBlogs'
import RecentEntries from './RecentEntries'


import headerData from '../../data/header'
import footerData from '../../data/footer'
import posts from '../../data/posts'
import otherBlogsData from '../../data/other-blogs'
import recentEntriesData from '../../data/recent-entries'

const App = () => {
  return (
    <div className='container'>
      <Header name={headerData.title} link={headerData.link}/>
      <Posts posts={posts}/>
      <OtherBlogs blogs={otherBlogsData}/>
      <RecentEntries entries={recentEntriesData}/>
      <Footer copyright={footerData.copyright} author={footerData.author}/>
    </div>
  )
}

export default App


 