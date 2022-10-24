import React, { useEffect, useState } from "react"
import './App.css';
import Header from "./Header"
import GameContainer from "./GameContainer";
import PostContainer from "./PostContainer";
import NewPostForm from "./NewPostForm";
// import gameData from "./data/db.json"

function App() {
  const [gameList, setGameList] = useState([])
  const [postList, setPostList] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then(resp => resp.json())
      .then(data => setGameList(data))
  },
    [])

  useEffect(() =>{
    fetch("http://localhost:3000/posts")
    .then(resp => resp.json())
    .then(data => setPostList(data))
  },
  [])

  function handleGameFormSubmit(name, image, description, genre) {
    fetch("http://localhost:3000/games", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: name,
        description: description,
        image: image,
        genre: genre
      })
    })
      .then(resp => resp.json())
      .then(data => {
        setGameList([...gameList, data])
      })
  }

  function handlePostFormSubmit(title, description, status, game) {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        title: title,
        description: description,
        status: status,
        game: game
      })
    })
      .then(resp => resp.json())
      .then(data => {
        setGameList([...postList, data])
      })
  }



  return (
    <div className="App">
      <Header onFormSubmit={handleGameFormSubmit} />
      <GameContainer gameData={gameList} />
      <NewPostForm gameData={gameList}/>
      <PostContainer postData={postList}/>
    </div>
  );
}

export default App;