import React from "react";
import CommentContainer from "./CommentContainer";
import NewPostForm from "./NewPostForm";


function PostContainer({ postData, gameData, onPostFormSubmit }) {


    const postArray = postData.map(post => {
        return (

            <span className="post">
            <li key={post.title} id={post.game}>
                <h3>{post.title}</h3>
                <h5>{post.game}</h5>
                <p>{post.status}</p>
                <p>{post.description}</p>
                <div className="comments">
                    <CommentContainer
                        postComments={post.comments}
                        postID={post.id} />
                </div>
            </li>
            </span>

        )
    })


    return (
        <div>
            <br />
            <br />

                <NewPostForm
                    gameData={gameData}
                    onPostFormSubmit={onPostFormSubmit} />
            <br />
            <ul>
                {postArray}
            </ul>
        </div>
    )
}

export default PostContainer;