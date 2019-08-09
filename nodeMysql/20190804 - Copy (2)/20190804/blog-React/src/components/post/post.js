import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Post extends Component {
    constructor() {
        super();
        this.state = { posts: [] }
    }

    componentWillMount() {
        fetch('http://localhost:3000/api/posts/')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    posts: json
                })
                // this.state.posts = json;
            })
    }


    render() {


        let postsToDis = this.state.posts.map(post => {
            return (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.id}`} class="nav-link">Read More...</Link>
                </div>)
        })

        return (
            <div class="container">
                {postsToDis}
            </div>
        );
    }
}
export default Post;
