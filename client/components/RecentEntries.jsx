import React from "react"
import recentEntries from "../../data/recent-entries"

function RecentEntries() {
  return (
    <div id="RecentEntries" className="section">
      <h2 className="sectionHeader" >Recent Entries</h2>
    {recentEntries.map((entry) => {
      return (
        <div  key={entry.id}>
         <a href={entry.link}><h2>{entry.name}</h2></a> 
        </div>
      )
    })}
  </div>
  )
}

export default RecentEntries;