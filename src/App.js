import "./app.css";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Donate from "./Components/Donate";
import NewGoal from "./Components/NewGoal";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <div className="content">
                <Navbar></Navbar>

                <Switch>
                    <Route path="/NewGoal">
                        <NewGoal />
                    </Route>{" "}
                    <Route path="/donate">
                        <Donate />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
            <footer className="footer">testing</footer>
        </div>
    );
}

export default App;
