import React from "react";

function NewGameForm({onFormSubmit}) {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.name.value, e.target.image.value, e.target.description.value, e.target.genre.value)
        onFormSubmit(e.target.name.value, e.target.image.value, e.target.description.value, e.target.genre.value)
        e.target.reset()
    }


    return (
        <div classname="form">
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="name" placeholder="New Game Title"></input>
            <input type="text" name="description" placeholder="Description"></input>
            <input type="text" name="image" placeholder="Link to Image"></input>
            <select type="select" name="genre" placeholder="Genre">
                <option>Adventure</option>
                <option>Card Battler</option>
                <option>Puzzle</option>
                <option>Simulator</option>
                <option>Strategy</option>
                <option>TTRPG</option>
            </select>
            <button type="submit">Add Game!</button>
        </form>
        </div>
    )
}

export default NewGameForm;