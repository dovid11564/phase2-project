import React from "react";

function GameCard({game, gameToFilter, setGameToFilter}) {
    return (
        <span className="gameCard" onClick={() => setGameToFilter(game.name)}>
            {/* <h4>{game.name}</h4> */}
            <img src={game.image} alt={game.name} className="gameImage"/>
            {/* <p>{game.description}</p>
            <p>Genre: {game.genre}</p> */}
        </span>
    )
}

export default GameCard;