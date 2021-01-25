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
import headerData from '../../data/header.js'
import footerData from '../../data/footer.js'

const App = () => (
  <div>
    <div className='header'>
      <Header header={headerData}/>
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
    <div className='footer'>
      <Footer footer={footerData}/>
    </div>
  </div>
)

export default App