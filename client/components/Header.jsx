import React from 'react'

export default function Header (props) {
  return (
    <a className="header" href={props.link}><h1>{props.title}</h1></a>
  )
}