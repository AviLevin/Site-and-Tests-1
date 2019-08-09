import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';


class Sports extends Component {

    constructor() {
        super();
        this.state = { sports: [] }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/sports`)
            .then(res => {
                const sports = res.data;
                console.log(sports);

                this.setState({ sports });
            })
    }



    render() {


        var sportsDisplay = this.state.sports.map(sport => {
            return (
                <div class="container">
                    <h3>{sport.title}</h3>
                    <p>{sport.body}</p>
                    <Link to={`/article/${sport.id}`}>Read more</Link>
                </div>)
        })

        return sportsDisplay;

    }
}

export default Sports;
