import React, { Component } from 'react';
import Post from './post';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = { post: {} }

    }

    componentWillMount() {
        let id = this.props.match.params.id;
        console.log(id);

        fetch(`http://localhost:3000/api/posts/${id}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    post: json
                })
                // this.state.posts = json;
            })
    }


    render() {
        return (
            <div>

                <div class="container">

                    <h2>{this.state.post.title}</h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <p>Some text..</p>
                    <p>{this.state.post.title}</p>
                    <Link to={`/post/${this.state.post.id}/edit`} class="btn btn-success">Edit</Link>
                    <Link to={`/post/${this.state.post.id}/delete`} class="btn btn-danger">Delete</Link>
                </div>
            </div>
        );
    }
}

export default Single;
