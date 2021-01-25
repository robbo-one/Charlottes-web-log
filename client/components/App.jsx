import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Posts from './Posts.jsx'
import OtherBlogs from './OtherBlogs'
import RecentEntries from './RecentEntries'

// importing data
import headerData from '../../data/header'
import footerData from '../../data/footer'
// import postsData from '../../data/posts'
import otherBlogs from '../../data/other-blogs.js'
import recentEntries from '../../data/recent-entries.js'


function App(props) {
    return (
        <div className="container">
            <Header title={headerData.title} link={headerData.link} />
            <div className='content'>
                <div className='otherBlogs'>
                    <OtherBlogs otherBlogs={otherBlogs}/>
                </div>
                <Posts/>
                <div className='recentEntries'>
                    <RecentEntries recentEntries={recentEntries}/>
                </div>
            </div>
            <Footer author={footerData.author} copyright={footerData.copyright}/>
        </div>
    )
}

export default App