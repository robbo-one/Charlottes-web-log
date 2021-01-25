import React from "react"

const RecentEntries = (props) => {
  return (
    <div>
      {props.entries.map(entrie => {
      return (
        <div className='otherBlogsContent button'>
          <h2 className="postTitle" key={entrie.id}><a href={entrie.link}>{entrie.name}</a></h2>
        </div>
      )
    })}
  </div>
  )  
}

export default RecentEntries