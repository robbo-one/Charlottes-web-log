
import React from 'react'

function Post (props) {
  const post = props.post
  
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <h2>{post.date}</h2>
      <p>{post.paragraphs}</p>


    </div>
  )
}

export default Post