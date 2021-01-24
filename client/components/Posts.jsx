import React from 'react'
import Post from './Post'

const Posts = props => (
  <div className='posts'>
  {props.posts.map(post => {
  return (
    <Post post={post}/>
    )
   })
  }
  </div>
)

export default Posts