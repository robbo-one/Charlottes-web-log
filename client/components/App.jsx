import React from 'react'
import Header from './Header'
import Footer from "./Footer"
import Posts from './Posts'
import OtherBlogs from './OtherBlogs'
import RecentEntries from "./RecentEntries"

import headerData from '../../data/header'
import footerData from "../../data/footer"
import postData from  '../../data/posts'
import otherBlogsData from '../../data/other-blogs'
import recentEntriesData from "../../data/recent-entries"




const App = (props) => {
  return (
    <div>
      <Header title={headerData.title} link={headerData.link} />
      <div className='blogContent'>
        <OtherBlogs blogs={otherBlogsData} /> 
        <Posts posts={postData} />
        <RecentEntries entries={recentEntriesData} />
      </div>
      <Footer copyright={footerData.copyright} author={footerData.author} />
    </div>
  )
}

export default App