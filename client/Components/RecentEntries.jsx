//Viewed solution for assistance on the code below
//This uses the id to retrieve an entry from all entries

import React from 'react'

import RecentEntry from './RecentEntry'

const RecentEntries = props => (
  <div className='recent-entries'>
    <header>Recent Entries</header>
    <ul>
      {props.entries.map(entry => {
        return <RecentEntry key={entry.id} entry={entry} />
      })}
    </ul>
  </div>
)

export default RecentEntries