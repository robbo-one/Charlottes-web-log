import React from "react"

import posts from  '../../data/posts'

const Posts = (props) => {
  return (
    <div>
      
        {props.posts.map(post => {
          return (
          <div>
            {/* <div>{post.id}</div> */}
            <h2 key={post.id}>{post.title}</h2>
            <div>{post.date}</div>
            <div>{post.commentCount}</div>
            <p>{post.paragraphs}</p>
          </div>
          )
        })}
        
      
    </div>
  )
}

export default Posts