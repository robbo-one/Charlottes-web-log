import React from "react"
import otherBlogs from "../../data/other-blogs"

function OtherBlogs() {
  return (
    <div id="OtherBlogs" className="section">
      <h2 className="sectionHeader" >OtherBlogs</h2>
    {otherBlogs.map((blog) => {
      return (
        <div>
         <a href={blog.link}><h2>{blog.blogTitle}</h2></a> 
          <p>ID: {blog.id}</p>

        </div>
      )
    })}
  </div>
  )
}

export default OtherBlogs;
