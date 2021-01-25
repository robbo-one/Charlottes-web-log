import React from "react"

const OtherBlogs = (props) => {
  return (
    <div>
      
        {props.blogs.map(blog => {
          return (
          <div>
            {/* <div>{blog.id}</div> */}
            <h2 className="postTitle" key={blog.id}><a href={blog.link}>{blog.blogTitle}</a></h2>
          </div>
          )
        })}
        
      
    </div>
  )
}

export default OtherBlogs