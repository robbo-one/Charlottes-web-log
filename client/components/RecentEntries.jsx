import React from 'react'
import RecentEntry from './RecentEntry'

function RecentEntries (props) {
    return (
        <>
            {props.recentEntries.map(entry => {
                return (
                    <RecentEntry entry={entry}/>
                )
            })}
        </>
    )
}

export default RecentEntries