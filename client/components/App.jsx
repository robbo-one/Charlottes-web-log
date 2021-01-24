import React from 'react'
import Header from './Header'
import headerData from '../../data/header'
import Footer from './Footer'
import footerData from '../../data/footer'

export default function App(props) {
  return (
    <div>
      <Header title={headerData.title} link={headerData.link} />
      <Footer copyright={footerData.copyright} author={footerData.author} />
    </div>
  )
}