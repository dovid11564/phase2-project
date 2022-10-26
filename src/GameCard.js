import React from "react";

function GameCard({game, gameToFilter, setGameToFilter, setIsHovering, setHoveredGame}) {

    function handleMouseOver() {
        setHoveredGame(game.name)
        setIsHovering(true)
    }

    function handleMouseOut() {
        setHoveredGame("")
        setIsHovering(false)
    }

    return (
        <span className="gameCard" onClick={() => setGameToFilter(game.name)} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {/* <h4>{game.name}</h4> */}
            <img src={game.image} alt={game.name} className="img"/>
            {/* <p>{game.description}</p>
            <p>Genre: {game.genre}</p> */}
        </span>
    )
}

export default GameCard;