import React from "react";
import Comment from "./Comment"

function CommentContainer({postID, postComments}) {

    const commentArray = postComments.map((comm) => {
        return <li key={comm}>{comm}</li>
    })

    return (
        <ul>
            {commentArray}
            <Comment postID={postID} key={postID} postComments={postComments}/>
        </ul>
    )
}


export default CommentContainer;