import React, {useEffect, useState} from "react"

function Games() {

    const [allGames, setAllGames] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/games")
        .then(resp => resp.json())
        .then(data => setAllGames(data))
    },
    [])

    const gamesArray = allGames.map((game) => {
        return (
            <span className="allGamesSpan" key={game.name}>
                <img src={game.image} alt={game.name} className="allGamesImage"/>
                <div className="allGamesText">
                <h3>{game.name}</h3>
                <h5>Genre: {game.genre}</h5>
                <p>{game.description}</p>
                <a href={game.shoppingLink}>
                    <button>Shop for this game!</button>
                </a>
                </div>
            </span>
        )
    })

    return (
        <>
        <h1>Games</h1>
        <div>{gamesArray}</div>
        </>
    )
}

export default Games;