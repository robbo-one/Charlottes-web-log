import React from 'react'

// import these js data files
import header from '../../data/header'
import footer from '../../data/footer'
import posts from '../../data/posts'
import otherBlogs from '../../data/other-blogs'
import recent from '../../data/recent-entries'

// import these jsx (HTML-like syntax) files
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Posts from './Posts.jsx'
import OtherBlogs from './OtherBlogs.jsx'
import RecentEntries from './RecentEntries'

// this is a component; an independant, reusable code block which divides 
// the UI into smaller pieces
const App = () => (
  <div className='container'>
  <Header title={header.title} link={header.link} />
  <OtherBlogs blogs={otherBlogs}/>
  
  <Posts posts={posts}/>

  <RecentEntries entries={recent}/>
   
  <Footer copyright={footer.copyright} author={footer.author} />
  {/* import from Footer.jsx the HTML for the 'footer.js datafile's copyright property' */}
  
  </div>
)

export default App


