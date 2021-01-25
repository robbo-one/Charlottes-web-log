//@ts-check

import React from "react";

/**
 *
 * @param {{id: number, link: string, name: string}} props
 */
const RecentEntry = (props) => {
    return (
        <div className='otherBlogsContent button'>
            <h2 className="postTitle" key={props.id}>
                <a href={props.link}>{props.name}</a>
            </h2>
        </div>
    );
};

export default RecentEntry;
