//@ts-check
import React from "react";
import RecentEntry from "./RecentEntry";

/**
 *
 * @param {{entries: {id: number, link: string, name: string}[]}} props
 */
const RecentEntries = (props) => {
  return (
    <div>
      {props.entries.map(entry => <RecentEntry id={entry.id} link={entry.link} name={entry.name} />)}
  </div>
  )
}

export default RecentEntries
