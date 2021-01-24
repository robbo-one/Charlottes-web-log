import React from 'react'

const Post = props => (
  <div className='posts'>
  <h1>{props.post.title}</h1>
  <h4>{props.post.date}</h4>
  <h4>{props.post.commentCount}</h4>

  {props.post.paragraphs.map(paragraph => {
  return (
   <p>{paragraph}</p>
    )
   })
  }
  </div>
)

export default Post