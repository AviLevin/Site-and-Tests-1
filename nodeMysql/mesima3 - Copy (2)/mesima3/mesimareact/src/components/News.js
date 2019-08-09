import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';


class news extends Component {

    constructor() {
        super();
        this.state = { news: [] }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/news`)
            .then(res => {
                const news = res.data;
                console.log(news);

                this.setState({ news });
            })
    }



    render() {


        var newsDisplay = this.state.news.map(newss => {
            return (
                <div class="container">
                    <h3>{newss.title}</h3>
                    <p>{newss.body}</p>
                    <Link to={`/article/${newss.id}`}>Read more</Link>
                </div>)
        })

        return newsDisplay;

    }
}

export default news;
