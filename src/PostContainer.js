import React from "react";
import CommentContainer from "./CommentContainer";


function PostContainer({ postData }) {


    const postArray = postData.map(post => {
    return (
        <li className="post" key={post.title} id={post.game}>
            <h3>{post.title}</h3>
            <p>{post.status}</p>
            <p>{post.description}</p>
            <p>{post.game}</p>

            <CommentContainer 
            postComments={post.comments} 
            postID={post.id}/>
        </li>
    )
})


return (
    <ul>
        {postArray}
    </ul>
)
}

export default PostContainer;