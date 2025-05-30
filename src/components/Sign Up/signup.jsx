import { useState } from 'react';
import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function SignUp() {
    return (
        <div className='container-fluid signupContain'>
            <h1>Sign Up</h1>
                <div className="mb-3 row">
                    <label for="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10 textbox">
                        <input type="text" className="form-control" id="username"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10 textbox">
                        <input type="text" className="form-control" id="email"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="pass" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10 textbox">
                        <input type="password" className="form-control" id="pass"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="confirmPass" className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-10 textbox">
                        <input type="password" className="form-control" id="confirmPass"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="phoneNum" className="col-sm-2 col-form-label">Phone Number</label>
                    <div className="col-sm-10 textbox">
                        <input type="text" className="form-control" id="phoneNum"/>
                    </div>
                </div>
                <div className="signupbtn">
                    <button type="submit">Sign Up</button>
                </div>
                <div className="haveaccount">
                    {/* Add the navigation on "here" to the Sign Up page */}
                    <p>Already have an account? Log in here.</p>
                </div>
        </div>
    )
}

export default SignUp;