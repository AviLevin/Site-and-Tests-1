import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Input from "../form/input";

class Login extends Component {

    render() {
        return (
            <div>
                <div class="container">
                    <h2>Login Form</h2>
                    <p>The form below contains a textarea for post:</p>
                    <form id="loginForm" action="/users/login" method="POST">
                        <Input type="text" name="username"  require="false" />
                        <Input type="password" name="password" require="true" />
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
