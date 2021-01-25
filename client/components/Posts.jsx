import React from 'react'
import Post from './Post'

const Posts = (props) => {
  return (
    <div className='posts'>
      <div>
        <h1>{props.title}</h1>
      </div>
      <ul>
      {
        props.posts.map(aPost => {
          return(
            <Post post={aPost}/>
          )
        })
      }
      </ul>
    </div>
  )
}

export default Posts