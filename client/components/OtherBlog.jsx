import React from 'react'

export default function OtherBlog (props) {
  return (
    <>
      <a href={props.blog.link}><h3>{props.blog.blogTitle}</h3></a>
    </>
  )
}
