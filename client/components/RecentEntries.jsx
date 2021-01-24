import React from "react"
import recentEntries from "../../data/recent-entries"

function RecentEntries() {
  return (
    <div>
    {recentEntries.map((entry) => {
      return (
        <div>
         <a href={entry.link}><h2>{entry.name}</h2></a> 
          <p>ID: {entry.id}</p>

        </div>
      )
    })}
  </div>
  )
}

export default RecentEntries;