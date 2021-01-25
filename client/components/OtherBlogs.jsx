import React from 'react'

const OtherBlogs = (props) => {
  return (
    <>
    <div>
      <h1>{props.title}</h1>
    </div>
    <div>
      <ul>
        {props.otherBlogs.map(anotherBlog => {
          return (
            <li>
            {anotherBlog.blogTitle}
            <br></br>
            {anotherBlog.link}
            </li>
          )
        }
        )}
      </ul>
    </div>
    </>
  )
}

export default OtherBlogs