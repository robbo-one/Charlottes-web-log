import React from 'react'
import OtherBlog from './OtherBlog'

function OtherBlogs (props) {
    return (
        <>
            {props.otherBlogs.map(blog => {
                return (
                    <OtherBlog blog={blog}/>
                )
            })}
        </>
    )
}

export default OtherBlogs