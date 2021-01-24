import React from 'react'

const Post = (props) => {
  return (
    <div className='footer-Wrapper'>
      <span className='post-id'>{props.id}</span>
      <span className='post-title'>{props.title}</span>
      <span className='post-date'>{props.date}</span>
      <span className='post-commentCount'>{props.commentCount}</span>
      <span className='post-paragraphs'>{props.paragraphs}</span>
    </div>
  )
}
export default Post