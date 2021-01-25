//Viewed solution for assistance on code below

import React from 'react'

const RecentEntry = props => {
  const { name, link } = props.entry
  return (
    <li className='recent-entry'>
      <a href={link}>{name}</a>
    </li>
  )
}

export default RecentEntry