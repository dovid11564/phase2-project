import React from "react";
import GameCard from "./GameCard";

function GameContainer({gameData, gameToFilter, setGameToFilter, setStatus, status}) {

    function handleClick() {
        setGameToFilter("")
        setStatus("")
    }

    function handleChange(e) {
        if (e.target.value === "All") {
            setStatus("")
        } 
        else if (e.target.value === "Looking for game") {
            setStatus("Looking for game")
        }
        else if (e.target.value === "Looking for players") {
            setStatus("Looking for players")
        }
    }

    const gameArray = gameData.map((game) => {
        return(
            
            <GameCard 
            game={game} 
            key={game.id} 
            gameToFilter={gameToFilter} 
            setGameToFilter={setGameToFilter}/>
        
        )
    })
    return (
        <div>
            <button onClick={handleClick}>Show All Posts</button>
            <select onChange={handleChange}>
                <option placeholder value="All">Show All</option>
                <option>Looking for game</option>
                <option>Looking for players</option>
            </select>
            {gameArray}
        </div>
    )
}

export default GameContainer;