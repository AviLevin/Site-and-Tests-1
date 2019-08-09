import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import News from "./components/News"
import Sports from "./components/Sports"
import Article from "./components/Article"

function App() {
    return (
        <div>
            <Router>

                <div>
                    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/sports/">Sports</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/news/">News</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={News} />
                    <Route path="/news" component={News} />
                    <Route path="/sports" component={Sports} />
                    <Route path="/article/:id" component={Article} />
                </div>
            </Router>

        </div>
    );
}

export default App;
