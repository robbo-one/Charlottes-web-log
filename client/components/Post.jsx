import React from 'react'

export default function Post (props) {
  return (
    <div className="post">
      <h2>{props.post.title}</h2>
      <h3>Date :{props.post.date}</h3>
      {props.post.paragraphs.map(paragraph => {
        return (
          <p>{paragraph}</p>
        )
      })}
    </div>
  )
}