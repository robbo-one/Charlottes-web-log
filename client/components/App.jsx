import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Posts from './Posts.jsx'

// importing data
import headerData from '../../data/header'
import footerData from '../../data/footer'
// import postsData from '../../data/posts'


function App(props) {
    return (
        <div className="container">
            <Header className="header" title={headerData.title} link={headerData.link} />
            <div className='content'>
                <Posts className='posts'/>
            </div>
            <Footer className="footer" author={footerData.author} copyright={footerData.copyright} />
        </div>
    )
}

export default App