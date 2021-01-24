import React from "react"
import header from "../../data/header"

function Header() {
  return (
    <a href={header.link}>
      <h1>{header.title}</h1>
    </a>
  )
}

export default Header
