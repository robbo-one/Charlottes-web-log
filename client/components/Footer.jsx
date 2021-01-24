import React from 'react'

function Footer (props) {
    return (
        <div>
            <h2>{props.author}</h2>
            <h3>copyright:{props.copyright}</h3>
        </div>
    )
}

export default Footer