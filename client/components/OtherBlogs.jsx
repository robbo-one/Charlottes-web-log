import React from 'react'
import OtherBlog from './OtherBlog'

const OtherBlogs = props => (
  <div className='otherBlogs'>
  {props.blogs.map(blog => {
  return (
    <OtherBlog key={blog.id} blog={blog}/>
    )
   })
  }
  </div>
)

export default OtherBlogs

