import React from "react";

function GameCard({game}) {
    return (
        <span className="gameCard" >
            {/* <h4>{game.name}</h4> */}
            <img src={game.image} alt={game.name} className="gameImage"/>
            {/* <p>{game.description}</p>
            <p>Genre: {game.genre}</p> */}
        </span>
    )
}

export default GameCard;