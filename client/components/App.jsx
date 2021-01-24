import React from 'react'
import Header from './Header'
import Footer from "./Footer"

import headerData from '../../data/header'
import footerData from "../../data/footer"

const App = (props) => {
  return (
    <div>
      <Header title={headerData.title} link={headerData.link} />
      <Footer copyright={footerData.copyright} author={footerData.author} />
    </div>
  )
}

export default App