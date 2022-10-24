import React from "react";

function NewGameForm() {


    return (
        <div>
            <input type="text" name="name" placeholder="type new game name here"></input>
            <input type="text" name="description" placeholder="type new game description here"></input>
            <select type="select">
                <option>Adventure</option>
                <option>Card Battler</option>
                <option>Puzzle</option>
                <option>Simulator</option>
                <option>Strategy</option>
                <option>TTRPG</option>
            </select>
        </div>
    )
}

export default NewGameForm;