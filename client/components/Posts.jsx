import React from 'react'
import hash from 'hash-string'
import Post from '../../data/posts'

function Posts (props){
    return(
        <div className="post">
            <h1>Posts</h1>
            <div>
                {Post.map(aPost => {
                    return (
                        <div>
                            <h3>{aPost.title}</h3>
                            <h4>{aPost.date}{aPost.commentCount}</h4>
                            {aPost.paragraphs.map(para =>{
                                return (
                                    <div>
                                        <p key={hash(para)}>{para}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



export default Posts