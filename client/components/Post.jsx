import React from 'react'

const Post = (props) => {
  return (
    <li>
      <h4>Title: {props.post.title}</h4> 
      <br></br>
      Date: 
      {props.post.date}
      <br></br>
      Comment Count:
      {props.post.commentCount}
      <br></br>
      <br></br>
      {props.post.paragraphs.map(aParagraph => {
        return(
          <p>
            {aParagraph}
          </p>
          )
        })}
      </li>
  )
}

export default Post