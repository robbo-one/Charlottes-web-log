import React from "react"

const Posts = (props) => {
  return (
    <div>
      
        {props.posts.map(post => {
          return (
          <div className='padding'>
            {/* <div>{post.id}</div> */}
            <h2 className="postTitle" key={post.id}>{post.title}</h2>
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