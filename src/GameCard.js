import React from "react";

function GameCard({ game }) {
    return (
        <li className="gameCard">
            <h4>{game.name}</h4>
            <div className="imageDiv">
                <img src={game.image} alt={game.name} />
            </div>
            <p>{game.description}</p>
            <p>Players Needed: {game.playersNeeded}</p>
            <p>Genre: {game.genre}</p>
        </li>
    )
}

export default GameCard;