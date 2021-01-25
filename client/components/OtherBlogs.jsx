import React from 'react'
import OtherBlog from './OtherBlog'

export default function OtherBlogs (props) {
  return (
    props.blogs.map(blog => {
      return (<OtherBlog key={blog.id} blog={blog} />)
    })
  )
}