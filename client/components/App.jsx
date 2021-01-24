import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import OtherBlog from './OtherBlog.jsx'
import OtherBlogs from './OtherBlogs.jsx'
import Post from './Post.jsx'
import Posts from './Posts.jsx'
import RecentEntries from './RecentEntries.jsx'
import RecentEntry from './RecentEntry.jsx'

const App = () => (
  <div>
    <Header title='Charlottes Web Blog'/>
    <OtherBlogs title='Other Blogs'/>
    <Posts title='Posts'/>
    <RecentEntries title='Recent Entries'/>
  </div>
)

export default App