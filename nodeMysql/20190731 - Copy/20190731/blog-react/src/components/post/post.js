import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentWillMount() {
    axios
      .get("http://localhost:3000/api")
      .then(function(response) {
        // handle success
        console.log(response.data);
      })



      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return <div>Post</div>;
  }
}
export default Post;
