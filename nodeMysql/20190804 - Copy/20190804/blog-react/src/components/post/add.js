import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor() {
        super();
        this.handleInputs = this.handleInputs.bind(this);
    }

    handleInputs(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("hhh");
        this.state.post = {
            title: this.state.title,
            body: this.state.body
        };

        axios.post(`http://localhost:3000/api/posts/add`, this.state.post)
            .then(res => {
                console.log(res.data);
            })






    }

    render() {
        return (
            <div>

                <div class="container">

                    <h2>Add new post</h2>
                    <p>The form below contains a textarea for post:</p>
                    <form id="addForm" action="/posts/add" method="POST" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="title">Title:</label>
                            <input type="text" class="form-control" id="title" name="title" onChange={this.handleInputs} />
                        </div>

                        <div class="form-group">
                            <label for="body">Body:</label>
                            <textarea class="form-control" rows="5" id="body" name="body" onChange={this.handleInputs} ></textarea>
                        </div>

                        <div class="form-group">
                            <label for="sel1">Category:</label>
                            <select class="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>


                        <div class="form-group">
                            <label for="sel1">Tags:</label>
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Option 1
                    </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Option 2
                    </label>
                            </div>
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="" />Option 3
                    </label>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>


                </div>
            </div>
        );
    }
}

export default Add;
