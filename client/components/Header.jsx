import React from 'react'


const Header = (props) => {
  return (
    <>
      <h1>{props.header.title}</h1>
    </>
    // <div>
    //   <h1>{props.title}</h1>
    // </div>
  )
}

export default Header