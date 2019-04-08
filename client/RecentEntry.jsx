const React = require('react')

function RecentEntry (props) {
  const {link, name} = props.entry
  return (
    <li className='recent-entry'>
      <a href={link}>{name}</a>
    </li>
  )
}

module.exports = RecentEntry
