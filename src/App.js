import React, { useEffect, useState } from "react"
import './App.css';
import Header from "./Header"
import GameContainer from "./GameContainer";
// import gameData from "./data/db.json"
import NewGameForm  from "./NewGameForm";

function App() {
  const [gameList, setGameList] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then(resp => resp.json())
    .then(data => setGameList(data))
  },
  [])



  return (
    <div className="App">
        <Header />
        <NewGameForm />
        <GameContainer gameData={gameList}/>
    </div>
  );
}

export default App;