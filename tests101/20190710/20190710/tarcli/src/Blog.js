
import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        console.log("App");

        axios.get('http://localhost:3000/blog')
            .then(response => {
                console.log(response);
                this.setState({ posts: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        var postsToPrint = this.state.posts.map(post => {
            return (`
                <div>
                    <h2>${post.title}</h2>
                    <h5>Authored by: ${post.userData.name}</h5>
                    <div className="fakeimg">Fake Image</div>
                    <p>Some text..</p>
                    <p>${post.body}</p>
                    <br>
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      
            </div>`);
        })
        return (
            <div>
                <h1>Blog</h1>
                <div>{postsToPrint}</div>

            </div>
        );
    }

}

export default Blog;
