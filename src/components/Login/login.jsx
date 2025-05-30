import { useState } from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Login() {
    return (
        <div className='container-fluid loginContain'>
            <h1>Login</h1>
                <div className="mb-3 row">
                    <label for="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10 textbox">
                        <input type="text" className="form-control" id="username"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="pass" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10 textbox">
                        <input type="password" className="form-control" id="pass"/>
                    </div>
                </div>
                <div className="loginbtn">
                    <button type="submit">Login</button>
                </div>
                <div className="noaccount">
                    {/* Add the navigation on "here" to the Sign Up page */}
                    <p>Don't have an account? Sign up here.</p>
                </div>
        </div>
    )
}

export default Login;