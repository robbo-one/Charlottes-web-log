import React from 'react'


const Footer = (props) => {
  return (
    <>
    <ul className='footer-list'>
      <li>
      {props.footer.copyright}
      </li>
      <br>
      </br>
      <li>
      {props.footer.author}
      </li>
    </ul>
    </>
  )
}

export default Footer