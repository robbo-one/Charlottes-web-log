import React from 'react'


const Header = (props) => (
  <div className='container'>
  <h1><a href={props.link}>{props.title}</a></h1>
  </div>
)

export default Header