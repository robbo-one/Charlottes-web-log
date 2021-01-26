//This goes through each post in the posts.js data array (which contains id, /////title, date, comment count and paragraphs.  
//It allows the post id to be associated with a particular post.  
//The Post.jsc component receives a JS object const proprs = thing.title, thing.data, thing.para.  
//This maps and returns the JS object??
//Post is inside posts.  Post exports to Posts 


import React from 'react'

import Post from './Post'

function Posts 
(props) {
  return (
    <>
      { props.posts.map(post => {
      return (
        <div>
        <Post key={post.id} post={post}/>
        </div>
      )
      })}
    </>
  )
}
export default Posts