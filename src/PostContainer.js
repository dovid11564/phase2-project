import React from "react";


function PostContainer({postData}) {
    const postArray = postData.map((post) => {
        return(
            <li className="post">
                <h3>{post.title}</h3>
                <p>{post.status}</p>
                <p>{post.description}</p>
                <p>{post.game}</p>
            </li>
        )
    })

    return(
        <ul>
            {postArray}
        </ul>
    )
}

export default PostContainer;