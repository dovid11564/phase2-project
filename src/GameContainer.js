import React, {useState} from "react";
import GameCard from "./GameCard";

function GameContainer({ gameData, gameToFilter, setGameToFilter, setStatus, status }) {

    const [isHovering, setIsHovering] =useState(false)
    const [hoveredGame, setHoveredGame] = useState("")

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
        return (

            <GameCard
                game={game}
                key={game.id}
                gameToFilter={gameToFilter}
                setGameToFilter={setGameToFilter}
                setIsHovering={setIsHovering}
                setHoveredGame={setHoveredGame} />

        )
    })
    return (
        <div className="gameDiv">
            <div>
                <button onClick={handleClick}>Show All Posts</button>
                <select onChange={handleChange}>
                    <option placeholder value="All">Show All</option>
                    <option>Looking for game</option>
                    <option>Looking for players</option>
                </select>
            </div>
            <div>{gameArray}</div>
            <br />
            <br />
            <p className="hoverText">{isHovering ? hoveredGame : "Select a game to filter posts!" }</p>
        </div>
    )
}

export default GameContainer;