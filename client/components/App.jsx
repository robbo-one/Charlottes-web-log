import React from 'react'
import Header from './Header.jsx'

import headerData from '../../data/header'


function App (props) {
    return (
      <div className="container">
          <Header title={headerData.title} link={headerData.link} />
          
      </div>
    )
  }

  export default App