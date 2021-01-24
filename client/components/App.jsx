import React from 'react'
import Header from './Header'

import headerData from '../../data/header'

const App = (props) => {
  return (
    <div>
      <Header title={headerData.title} link={headerData.link} />
    </div>
  )
}

export default App