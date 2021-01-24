import React from "react"

const Footer = (props) => {
  return (
    <div>
      <p>{props.copyright}</p>
      <p>{props.author}</p>
    </div>
  )
}

export default Footer