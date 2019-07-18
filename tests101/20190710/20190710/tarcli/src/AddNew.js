import React, { Component } from 'react';
import axios from 'axios';

class AddNew extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            body: ""
        }
    }

    addNew() {
        console.log("addnew");
        let title = this.state.title;
        let body = this.state.body;
        axios.put('http://localhost:3000/blog/new', { title, body })
            .then(response => {
                console.log(response);
                this.setState({ posts: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })


    }


    render() {
        return (
            <div>
                <h1>Add new Post</h1>
                <form>
                    <div class="form-group">
                        <label for="email">Title:</label><br />
                        <input type="email" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Body:</label><br />
                        <textarea></textarea>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.addNew}>Submit</button>
                </form>

            </div>
        );
    }

}

export default AddNew;
