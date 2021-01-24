import React from 'react'

const Posts = (props) => {
  return (
    <div className='posts'>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div>
        <ul>
          {props.posts.map(aPost => {
          return(
          <li>
            Title: 
            {aPost.title}
            <br></br>
            Date: 
            {aPost.date}
            <br></br>
            Comment Count:
            {aPost.commentCount}
            <br></br>
            {aPost.paragraphs.map(aParagraph => {
              return(
                <p>
                  {aParagraph}
                </p>
              )
            })}
          </li>)
        })}
        </ul>
      </div>
    </div>
  )
}

export default Posts