import React, { useEffect, useState } from "react"
import Header from "./Header"
import GameContainer from "./GameContainer";
import PostContainer from "./PostContainer";
// import gameData from "./data/db.json"

function Home() {
  const [gameList, setGameList] = useState([])
  const [postList, setPostList] = useState([])
  const [gameToFilter, setGameToFilter] = useState("")
  const [status, setStatus] = useState("")
  const [newComment, setNewComment] = useState("")
  


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
    [newComment])

  function handleGameFormSubmit(name, image, description, shoppingLink, genre) {
    fetch("http://localhost:3000/games", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: name,
        description: description,
        image: image,
        shoppingLink: shoppingLink,
        genre: genre
      })
    })
      .then(resp => resp.json())
      .then(data => {
        setGameList([...gameList, data])
      })
  }

  function handlePostFormSubmit(title, description, status, game, date, time, location) {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        title: title,
        description: description,
        status: status,
        game: game,
        date: date,
        time: time,
        location: location,
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
      <div className="gameContainer">
        <GameContainer
          gameData={gameList}
          gameToFilter={gameToFilter}
          setGameToFilter={setGameToFilter}
          status={status}
          setStatus={setStatus} />
      </div>

      <PostContainer
        postData={postsFilteredByGame}
        gameData={gameList}
        onPostFormSubmit={handlePostFormSubmit} 
        newComment={newComment}
        setNewComment={setNewComment}/>
    </div>
  );
}

export default Home;