import React from 'react';
import Home from './Home';
import Blog from './Blog';
import AddNew from './AddNew';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Nav() {
    return (

        <Router>
            <div>
                <nav className="navbar navbar-expand-sm bg-light">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" ><Link to="/">Home</Link></a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" > <Link to="/blog">Blog</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" > <Link to="/addnew">Add New Post</Link></a>
                        </li>
                    </ul>

                </nav>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/addnew" component={AddNew} />
            </div>
        </Router>
    );
}

export default Nav;
