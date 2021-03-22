import "./app.css";
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Donate from "./Components/Donate";
import NewGoal from "./Components/NewGoal";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="content">
                <div className="responsive-wrapper">
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
            </div>
            <Footer />
        </div>
    );
}

export default App;
