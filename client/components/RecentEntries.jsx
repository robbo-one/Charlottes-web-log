import React from 'react'

const RecentEntries = (props) => {
  return (
    <>
    <div>
      <h1>{props.title}</h1>
    </div>
    <div>
      <ul>
        {props.recentEntries.map(anotherEntry => {
          return (
            <li>
            {anotherEntry.name}
            <br></br>
            {anotherEntry.link}
            </li>
          )
        }
        )}
      </ul>
    </div>
    </>
  )
}

export default RecentEntries