import React from "react";

function NewPostForm({ gameData, onPostFormSubmit }) {

    const gameSelectArray = gameData.map((game) => {
        return(
            <option key={game.description}>{game.name}</option>
        )
    })


    function handleSubmit(e) {
        e.preventDefault()
        onPostFormSubmit(e.target.title.value, e.target.description.value, e.target.status.value, e.target.game.value)
        
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="title" placeholder="Post Title"></input>
            <input type="text" name="description" placeholder="Post Description"></input>
            <select name="status">
                <option>Looking for game</option>
                <option>Looking for players</option>
            </select>
            <select name="game">
                {gameSelectArray}
            </select>
            <button type="submit">Post!</button>
        </form>
    )
}

export default NewPostForm;