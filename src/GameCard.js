import React from "react";

function GameCard({ game, setGameToFilter, setIsHovering, setHoveredGame }) {

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
            <img src={game.image} alt={game.name} className="img" />

        </span>
    )
}

export default GameCard;