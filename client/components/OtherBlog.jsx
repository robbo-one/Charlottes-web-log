import React from 'react'

// import blogData from '../../data/other-blogs.js'


function OtherBlog (props) {
    const blog = props.blog

    return(
        <div className="otherBlog">
            <h3><a href={blog.link}>{blog.blogTitle}</a></h3>
        </div>
    )
}

export default OtherBlog