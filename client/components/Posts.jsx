import React from "react"
import posts from "../../data/posts"

function Posts() {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            <h2>{post.title}</h2>
            <p>ID: {post.id}</p>
            <p>Date: {post.date}</p>
            <p>Comment count: {post.commentCount}</p>
            <p>
              {post.paragraphs.map(sent => {
                return <p className="sentence">{sent}</p>
              })}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Posts;
