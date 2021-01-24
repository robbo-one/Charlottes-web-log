import React from 'react'

const Header = (props) => {
  return (
    <div className='header-Wrapper'>
      <span className='header-name'>{props.name}</span>
      <span className='header-link'>{props.link}</span>
    </div>
  )
}
export default Header