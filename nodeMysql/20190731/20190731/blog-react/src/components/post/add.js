import React, { Component } from 'react';
import Post from './post';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Add extends Component {
    render() {
        return (
            <div>

                <div class="container">

                    <h2>Add new post</h2>
                    <p>The form below contains a textarea for post:</p>
                    <form id="addForm" action="/posts/add" method="POST">
                        <div class="form-group">
                            <label for="title">Title:</label>
                            <input type="text" class="form-control" id="title" name="title" />
                        </div>

                        <div class="form-group">
                            <label for="body">Body:</label>
                            <textarea class="form-control" rows="5" id="body" name="body"></textarea>
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
