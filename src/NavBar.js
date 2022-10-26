import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "90px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "orange",
    textDecoration: "none",
    color: "black",
  };

/* define the NavBar component */
function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "yellow",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "yellow",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/games"
          exact
          style={linkStyles}
          activeStyle={{
            background: "yellow",
          }}
        >
          Games
        </NavLink>
      </div>
    );
  }

  export default NavBar;