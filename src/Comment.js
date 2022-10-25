import React, { useState } from "react"

function Comment({postID, postComments}) {

    const [newComment, setNewComment] = useState("")

    function handleCommentSubmit(e) {
        e.preventDefault()
        
        console.log(newComment)
        fetch(`http://localhost:3000/posts/${postID}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                comments: [...postComments, newComment]
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    return (
        <form onSubmit={(e) => handleCommentSubmit(e)}>
            <input type="text" name="commentInput" placeholder="Type a comment here!" onChange={(e) => setNewComment(e.target.value)}></input>
            <button type="submit">POST!</button>
        </form>
    )
}

export default Comment;