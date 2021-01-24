import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

// importing data
import headerData from '../../data/header'
import footerData from '../../data/footer'


function App(props) {
    return (
        <div className="container">
            <Header className="header" title={headerData.title} link={headerData.link} />
            <div className='content'>

            </div>
            <Footer className="footer" author={footerData.author} copyright={footerData.copyright} />
        </div>
    )
}

export default App