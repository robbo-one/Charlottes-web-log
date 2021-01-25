import React from 'react'


const RecentEntry = props => (
  <div className='recentEntry'>
    <h4> 
      <a href={props.entry.link}>{props.entry.name} </a>
    </h4>

  </div>
)

export  default RecentEntry