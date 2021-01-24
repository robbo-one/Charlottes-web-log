import React from 'react'

const Header = (props) => {
  return (
    <div className='header-Wrapper'>
      <span className='header-name'>{props.name}</span>
    </div>
  )
}
export default Header