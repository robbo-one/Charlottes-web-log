//Viewed solution for assistance on the code below
//This uses the id to retrieve a blog from all blogs
import React from 'react'

import OtherBlog from './OtherBlog'

const OtherBlogs = props => (
  <div className='other-blogs'>
    <header>Other Blogs</header>
    <ul>
      {props.blogs.map(blog => {
        return <OtherBlog key={blog.id} blog={blog} />
      })}
    </ul>
  </div>
)

export default OtherBlogs