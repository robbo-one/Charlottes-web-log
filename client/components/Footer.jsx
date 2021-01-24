import React from 'react'

const Footer = (props) => {
  return (
    <div className='footer-Wrapper'>
      <span className='footer-copyright'>{props.copyright}</span>
      <span className='footer-author'>{props.author}</span>
    </div>
  )
}
export default Footer