import React from 'react'

export default function RecentEntry (props) {
  return (
    <>
      <a href={props.entry.link}><h3>{props.entry.name}</h3></a>
    </>
  )
}