import React from 'react'

import header from '../../data/header'
import footer from '../../data/footer'
import posts from '../../data/posts'
import otherBlogs from '../../data/other-blogs'


import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Posts from './Posts.jsx'
import OtherBlogs from './OtherBlogs.jsx'

// import OtherBlog from './OtherBlog.jsx'
// import OtherBlogs from './OtherBlogs.jsx'
// import Post from './Post.jsx'

// import RecentEntries from './RecentEntries.jsx'
// import RecentEntry from './RecentEntry.jsx'


const App = () => (
  <div className='container'>
  <Header title={header.title} link={header.link} />
  <OtherBlogs blogs={otherBlogs}/>
  <Posts posts={posts}/>
   
    <Footer copyright={footer.copyright} author={footer.author} />
  </div>
)

export default App


