import './App.css';
import Home from "./Home"
import About from "./About"
import NavBar from "./NavBar"
import Games from "./Games"
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";


function App() {
    return (
        <Router>
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/games">
                    <Games />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
        </Router>
    );
}

export default App;