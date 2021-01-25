import React from "react"
import posts from "../../data/posts"

function Posts() {
  return (
    <div id="Posts" className="section">
      <h2 className="sectionHeader">Posts</h2>
      {posts.map((post) => {
        return (
          <div  key={post.id}>
            <h2 className="postTitle">{post.title}</h2>
            <p>Date: {post.date}</p>
            <p>Comment count: {post.commentCount}</p>
            <p>
              {post.paragraphs.map(sent => {
                return <span className="sentence">{sent}</span>
              })}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Posts;
