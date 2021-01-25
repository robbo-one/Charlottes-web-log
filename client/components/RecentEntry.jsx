import React from 'react'

function RecentEntry (props) {
    const entry = props.entry

    return(
        <div className="recentEntry">
            <h3><a href={entry.link}>{entry.name}</a></h3>
        </div>
    )
}

export default RecentEntry