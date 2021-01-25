import React from "react"
import otherBlogs from "../../data/other-blogs"

function OtherBlogs() {
  return (
    <div id="OtherBlogs" className="section">
      <h2 className="sectionHeader" >OtherBlogs</h2>
    {otherBlogs.map((blog) => {
      return (
        <div key={blog.id}>
         <a href={blog.link}><h2>{blog.blogTitle}</h2></a> 
        </div>
      )
    })}
  </div>
  )
}

export default OtherBlogs;
