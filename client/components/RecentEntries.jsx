import React from 'react'
import RecentEntry from './RecentEntry'

const RecentEntries = props => (
  <div className='recentEntries' >
    {props.entries.map(entry => {
      return (
        <RecentEntry key={entry.id} entry={entry}/>
      )
    })}
  </div>
)

export default RecentEntries