import React from 'react'
import Header from './Header'
import headerData from '../../data/header'

export default function App (props) {
  return (
    <Header title={headerData.title} link={headerData.link} />
  )
}