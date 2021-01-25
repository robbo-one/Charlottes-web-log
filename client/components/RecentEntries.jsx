import React from 'react'
import RecentEntry from './RecentEntry'

export default function RecentEntries(props) {
  return (
    props.entries.map(entry => {
      return (<RecentEntry key={entry.id} entry={entry} />)
    })
  )
}