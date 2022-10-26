import React from "react";
import Comment from "./Comment"

function CommentContainer({ postID, postComments, newComment, setNewComment }) {

    const commentArray = postComments.map((comm) => {
        return <li key={comm} className="comment">{comm}</li>
    })

    return (
        <div>
            <h5 className="commentHeader">Comments:</h5>
        <ul>
            {commentArray}
            <Comment postID={postID} key={postID} postComments={postComments} newComment={newComment} setNewComment={setNewComment}/>
        </ul>
        </div>
    )
}


export default CommentContainer;