import React from 'react'
import OtherBlog from './OtherBlog'

const OtherBlogs = props => (
  <div className='blogs'>
  {props.blogs.map(blog => {
  return (
    <OtherBlog blog={blog}/>
    )
   })
  }
  </div>
)

export default OtherBlogs

