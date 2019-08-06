import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Register extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <h2>Register Form</h2>
                    <p>The form below contains a textarea for post:</p>
                    <form id="registerForm" action="/users/register" method="POST">
                        <div class="form-group">
                            <label for="username">Username:</label>
                            <input type="text" class="form-control" id="username" name="username" required />
                        </div>

                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" class="form-control" id="password" name="password" required />
                        </div>

                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" id="email" name="email" required />
                        </div>

                        <div class="form-group">
                            <label for="fname">First name:</label>
                            <input type="text" class="form-control" id="fname" name="fname" required />
                        </div>

                        <div class="form-group">
                            <label for="lname">Last name:</label>
                            <input type="lname" class="form-control" id="lname" name="lname" required />
                        </div>


                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        );
    }
}
export default Register;
