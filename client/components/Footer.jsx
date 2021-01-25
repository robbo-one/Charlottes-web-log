// need to import React at the top of every .jsx file
import React from 'react'

const Footer = (props) => (
  <div className='footer'>
  <h4>{props.copyright}{props.author}</h4>
  </div>
)

// export this so you can import in App
export default Footer