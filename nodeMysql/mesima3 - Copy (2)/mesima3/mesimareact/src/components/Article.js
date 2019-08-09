import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';


class Article extends Component {

    constructor() {
        super();
        this.state = { article: { article: {}, comments: [], formTitle:"", formBody: "" } }
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        axios.get(`http://localhost:3000/article/${id}`)
            .then(res => {
                const article = res.data;
                console.log(article);

                this.setState({ article });
            })
    }

    addComment = () => {

        var id = this.props.match.params.id;
        var title = "title";
        var body = "body";

        axios.post(`http://localhost:3000/comment/`, {title:title,body:body,article_id:id})
        .then(res => {
            const data = res.data;
            console.log(data);

        })

    }

    render() {



        return (
            <div class="container">
                <button onClick={this.addComment}>Add Comment</button>
                <h3>{this.state.article.article.title}</h3>
                <p>{this.state.article.article.body}</p>
                <hr />

                <div class="container">
                    {JSON.stringify(this.state.article.comments)}
                </div>

            </div>)



    }
}

export default Article;
