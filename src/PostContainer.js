import React, {useState} from "react";
import CommentContainer from "./CommentContainer";
import NewPostForm from "./NewPostForm";


function PostContainer({ postData, gameData, onPostFormSubmit, newComment, setNewComment }) {

    const [postFormDisplay, setPostFormDisplay] = useState(false)

    function onFormButtonClick () {
        setPostFormDisplay(postFormDisplay => !postFormDisplay)
    }

    const postArray = postData.reverse().map(post => {
        return (

            <span className="post">
            <li key={post.title} id={post.game}>
                <h4>{post.title}</h4>
                <h5>{post.game}</h5>
                <p className="dnt">Location: {post.location}</p>
                <p className="dnt">Date: {post.date} Time: {post.time}</p>
                <p className="dnt">{post.status}</p>
                <p className="postDescription">{post.description}</p>
                <div className="comments">
                    <CommentContainer
                        postComments={post.comments}
                        postID={post.id} 
                        newComment={newComment}
                        setNewComment={setNewComment}
                        key={post.title}/>
                </div>
            </li>
            </span>

        )
    })

    


    return (
        <div>
            <br />
            <button onClick={(e) => onFormButtonClick(e)} className="postButton">{postFormDisplay ? "Hide" : "Create a new post!"}</button>
            <br />
            <br />
            {postFormDisplay ?
                <NewPostForm
                    gameData={gameData}
                    onPostFormSubmit={onPostFormSubmit} /> : null}
            <br />
            <ul>
                {postArray}
            </ul>
        </div>
    )
}

export default PostContainer;