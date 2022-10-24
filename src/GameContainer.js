import React from "react";
import GameCard from "./GameCard";

function GameContainer({gameData}) {
    const gameArray = gameData.map((game) => {
        return(
            <GameCard game={game} key={game.name}/>
        )
    })
    return (
        <ul className="cards">
            {gameArray}
        </ul>
    )
}

export default GameContainer;