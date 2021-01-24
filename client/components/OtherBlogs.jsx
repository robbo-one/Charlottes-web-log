import React from 'react'
import OtherBlog from './OtherBlog'

const OtherBlogs = props => (
  <div className='posts'>
  {props.blogs.map(blog => {
  return (
    <Post post={post}/>
    )
   })
  }
  </div>
)

export default OtherBlogs

