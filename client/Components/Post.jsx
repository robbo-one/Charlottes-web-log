import React from 'react'

function Post (props) {
  const post = props.post

  return (
    <div className='post'>
      <h2>{post.title}</h2>
      <h2>{post.date}</h2>
      <h2>{post.paragraphs}</h2>
    </div>
  )
}
export default Post

