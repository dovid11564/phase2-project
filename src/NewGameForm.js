import React from "react";

function NewGameForm({onFormSubmit}) {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.name.value, e.target.image.value, e.target.description.value, e.target.genre.value, e.target.playersNeeded.value)
        onFormSubmit(e.target.name.value, e.target.image.value, e.target.description.value, e.target.genre.value, e.target.playersNeeded.value)
    }


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="name" placeholder="type new game name here"></input>
            <input type="text" name="description" placeholder="type new game description here"></input>
            <input type="text" name="image" placeholder="put your link to a game image here"></input>
            <input type="text" name="playersNeeded" placeholder="how many players are you looking for?"></input>
            <select type="select" name="genre" placeholder="genre">
                <option>Adventure</option>
                <option>Card Battler</option>
                <option>Puzzle</option>
                <option>Simulator</option>
                <option>Strategy</option>
                <option>TTRPG</option>
            </select>
            <button type="submit">Add Game!</button>
        </form>
    )
}

export default NewGameForm;