import React, { useState } from "react"
import NewGameForm from "./NewGameForm";

function Header({onFormSubmit}) {
    const [button, setButton] = useState(false)

    function handleClick() {
        setButton(button => !button)
    }

    return (
        <div>
            <h2>
                Party Planner
            </h2>
            <button onClick={handleClick}>
                {button ? "Hide new game form": "Add a new game!"}
            </button>
            {button ? <NewGameForm onFormSubmit={onFormSubmit}/> : null}
        </div>
    )
}

export default Header;