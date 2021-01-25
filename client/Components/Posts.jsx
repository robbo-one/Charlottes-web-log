import React from 'react'

import Post from './Post'

function Posts 
(props) {
  return (
    <>
      { props.posts.map(post => {
      return (
        <div>
        <Post key={post.id} post={post}/>
        </div>
      )
      })}
    </>
  )
}
export default Posts