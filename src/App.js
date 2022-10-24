import React from "react"
import './App.css';
import Header from "./Header"
import GameContainer from "./GameContainer";
import gameData from "./data/db.json"

function App() {
  return (
    <div className="App">
        <Header />
        <GameContainer gameData={gameData}/>
    </div>
  );
}

export default App;