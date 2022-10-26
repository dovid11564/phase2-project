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
            <h2>
                Party Planner
                <h4>Find Friends to play with!</h4>
            </h2>
            <p><button onClick={handleClick}>
                {button ? "Hide": "Don't see a game you like? Click to add one!"}
            </button>
            {button ? <NewGameForm onFormSubmit={onFormSubmit}/> : null}
            </p>
        </div>
        </div>
    )
}

export default Header;