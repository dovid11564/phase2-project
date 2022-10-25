import React, { useEffect, useState } from "react"
import './App.css';
import Header from "./Header"
import GameContainer from "./GameContainer";
import PostContainer from "./PostContainer";
// import gameData from "./data/db.json"

function App() {
  const [gameList, setGameList] = useState([])
  const [postList, setPostList] = useState([])
  const [gameToFilter, setGameToFilter] = useState("")
  const [status, setStatus] = useState("")


  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then(resp => resp.json())
      .then(data => setGameList(data))
  },
    [])

  useEffect(() => {
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
        game: game,
        comments: []
      })
    })
      .then(resp => resp.json())
      .then(data => {
        setPostList([...postList, data])
      })
  }

  const postsFilteredByGame = postList.filter((post) => {
    if (gameToFilter === "") {
      if (status === "") {
        return true
      }
      else if (post.status === status) {
        return true
      } else {
        return false
      }
    }
    else if (post.game === gameToFilter) {
      if (status === "") {
        return true
      }
      if (post.status === status) {
        return true
      } else {
        return false
      }
    }
    else {
      return false
    }
  })



  return (
    <div className="App">
      <Header
        onFormSubmit={handleGameFormSubmit} />

      <GameContainer
        gameData={gameList}
        gameToFilter={gameToFilter}
        setGameToFilter={setGameToFilter}
        status={status}
        setStatus={setStatus} />


      <PostContainer
        postData={postsFilteredByGame} 
        gameData={gameList}
        onPostFormSubmit={handlePostFormSubmit}/>
    </div>
  );
}

export default App;