import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor(){
        super();

        this.state = {
            redirect: null

        }
    }

    render() {
        return (
            <div>
                <form>
                    <br></br><br></br>
                    <h5>Username</h5>
                    <input
                        type="text"
                        className="form-control mt-3"
                        name="username"
                        placeholder="Username"
                    />
 
                    <br></br>
                    <h5>Password</h5>
                    <input
                        type="text"
                        className="form-control mt-3"
                        name="password"
                        placeholder="Password"
                    />


                    <button type="submit" className="btn btn-outline-info mt-3">
                        Submit
          </button>
                </form>
            </div>
        );
    }
}
