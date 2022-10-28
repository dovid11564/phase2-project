import React, { useState } from "react"
import NewGameForm from "./NewGameForm";

function Header({onFormSubmit}) {
    const [button, setButton] = useState(false)

    function handleClick() {
        setButton(button => !button)
    }

    return (
        <div className="header">
            <div>
            <h2 classname="headers">Party Planner</h2>
            <h4 classname="headers">Find Friends to play with!</h4>
            <p><button onClick={handleClick} className="addNewGameButton">
                {button ? "Hide": "Don't see a game you like? Click to add one!"}
            </button>
            {button ? <NewGameForm onFormSubmit={onFormSubmit}/> : null}
            </p>
        </div>
        </div>
    )
}

export default Header;