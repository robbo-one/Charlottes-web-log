import React from 'react'

const OtherBlog = props => (
  <div className='otherBlog'>
  <h1>{props.blog.blogTitle}</h1>
  <h4>{props.blog.link}</h4>
  </div> 

)

export default OtherBlog
