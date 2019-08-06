import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {

    render() {
        return (
            <div>     
                <div class="container">
                <h2>Login Form</h2>
                <p>The form below contains a textarea for post:</p>
                <form id="loginForm" action="/users/login" method="POST">
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" class="form-control" id="username" name="username" required />
            </div>

                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" class="form-control" id="password" name="password" required />
            </div>


                            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
                    </div>
 </div>
                );
            }
        }
        
        export default Login;
