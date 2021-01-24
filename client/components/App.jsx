import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import OtherBlog from './OtherBlog.jsx'
import OtherBlogs from './OtherBlogs.jsx'
import Post from './Post.jsx'
import Posts from './Posts.jsx'
import RecentEntries from './RecentEntries.jsx'
import RecentEntry from './RecentEntry.jsx'
import postData from '../../data/posts'

const App = () => (
  <div>
    <div className='header'>
      <Header title='Charlottes Web Blog'/>
    </div>
    <div className='body-container'>
      <div className='other-blogs'>
        <OtherBlogs title='Other Blogs'/>
      </div>
      <div className='posts'>
        <Posts title='Posts' posts={postData}/>
      </div>
      <div className='recent-entries'>
        <RecentEntries title='Recent Entries'/>
      </div>
    </div>
  </div>
)

export default App