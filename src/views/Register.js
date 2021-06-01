import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

export default class Register extends Component {
    constructor() {
        super();

        this.state = {
            redirect: null

        }
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">

                        <div class="col-sm">
                            <br></br><br></br>
                            <form>

                                <h5>Username</h5>
                                <input
                                    type="text"
                                    className="form-control mt-3"
                                    name="username"
                                    placeholder="Username"
                                />
                                <br></br><br></br>

                                <h5>Email</h5>
                                <input
                                    type="text"
                                    className="form-control mt-3"
                                    name="email"
                                    placeholder="Email"
                                />
                                <br></br><br></br>

                                <h5>Password</h5>
                                <input
                                    type="text"
                                    className="form-control mt-3"
                                    name="password"
                                    placeholder="Password"
                                />
                                <br></br><br></br>

                                <h5 className=''>Confirm password</h5>
                                <input
                                    type="text"
                                    className="form-control mt-3"
                                    name="confirmpassword"
                                    placeholder="Confirm Password"
                                />

                                <button type="submit" className="btn btn-outline-info mt-3">
                                    Submit
                                </button>
                            </form>
                        </div>

                        <div class="col-sm">
                            <br></br><br></br>
                            <div class="w3-card-4">
                                <header class="w3-container w3-pink">
                                    <h1>Over 100 new users daily!</h1>
                                </header>

                                <div class="w3-container">
                                    <br></br>
                                    <img src="https://townsquare.media/site/518/files/2020/11/The-Pink-Gingerbread-House-on-the-Vineyard-Is-for-Sale.jpg" alt="..." class="img-thumbnail" />
                                    <p>Sign up now to join the largest house-based social network!</p>
                                </div>

                                <footer class="w3-container w3-pink">
                                    <h5> <br></br></h5>
                                </footer>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
