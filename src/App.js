import React, { useEffect, useState } from "react"
import './App.css';
import Header from "./Header"
import GameContainer from "./GameContainer";
// import gameData from "./data/db.json"

function App() {
  const [gameList, setGameList] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then(resp => resp.json())
      .then(data => setGameList(data))
  },
    [])

  function handleFormSubmit(name, image, description, genre, playersNeeded) {

    fetch("http://localhost:3000/games", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: name,
        description: description,
        image: image,
        playersNeeded: playersNeeded,
        genre: genre
      })
    })
      .then(resp => resp.json())
      .then(data => {
        setGameList([...gameList, data])
      })
  }



  return (
    <div className="App">
      <Header onFormSubmit={handleFormSubmit} />
      <GameContainer gameData={gameList} />
    </div>
  );
}

export default App;