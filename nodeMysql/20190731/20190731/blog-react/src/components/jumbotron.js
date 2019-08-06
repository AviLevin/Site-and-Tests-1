import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1>title</h1>
                        <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first
                projects on the web.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Jumbotron;
