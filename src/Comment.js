import React, {useState} from "react"

function Comment({postID, postComments, newComment, setNewComment}) {

    const [typedComment, setTypedComment] = useState("")

    function handleCommentSubmit(e) {
        
        setNewComment(typedComment)
        e.preventDefault()
        console.log(typedComment)
        fetch(`http://localhost:3000/posts/${postID}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                comments: [...postComments, typedComment]
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        e.target.reset()
    }

    return (
        <form onSubmit={(e) => handleCommentSubmit(e)}>
            <input type="text" name="commentInput" placeholder="Comment..." onChange={(e) => setTypedComment(e.target.value)}></input>
            <button type="submit" className="postButton">POST!</button>
        </form>
    )
}

export default Comment;