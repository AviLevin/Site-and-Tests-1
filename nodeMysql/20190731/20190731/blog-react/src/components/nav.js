import React, { Component } from 'react';
import Post from './post/post';
import Jambotron from './jumbotron';
import Add from './post/add';
import Login from './user/login';
import Register from './user/register';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <div>
                    <Router>
                        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                            <a class="navbar-brand" href="#">Noam's Blog</a>

                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/add" class="nav-link">Add</Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <Link to="/register" class="nav-link">Register</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <Link to="/login" class="nav-link">Login</Link>
                                </li>
                            </ul>

                        </nav>
                        <Jambotron />
                        <div>
                            <Route path="/" exact component={Post} />
                            <Route path="/add" exact component={Add} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/register" exact component={Register} />
                        </div>
                    </Router>

                </div>
            </div>
        );
    }
}

export default Nav;
