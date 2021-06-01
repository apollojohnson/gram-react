import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

export default class Posts extends Component {
    constructor() {
        super();

        this.state = {
            redirect: null

        }
    }

    render() {
        return (
            <div class="w3-container">


                <br></br>


                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="w3-card-4">
                                <header class="w3-container w3-green">
                                    <h1>Header</h1>
                                </header>

                                <div class="w3-container">
                                    <br></br>
                                    <img src="https://images.dwell.com/photos/6110512577102479360/6290466917234761728/large.jpg" alt="..." class="img-thumbnail" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>

                                <footer class="w3-container w3-green">
                                    <h5>@alyssamon</h5>
                                </footer>
                            </div>
                        </div>


                        <div class="col-sm">
                            <div class="w3-card-4">
                                <header class="w3-container w3-green">
                                    <h1>Header</h1>
                                </header>

                                <div class="w3-container">
                                    <br></br>
                                    <img src="http://cdn.home-designing.com/wp-content/uploads/2019/07/modern-home-exterior.jpg" alt="..." class="img-thumbnail" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>

                                <footer class="w3-container w3-green">
                                    <h5>@alyssamon</h5>
                                </footer>
                            </div>
                        </div>


                        <div class="col-sm">
                            <div class="w3-card-4">
                                <header class="w3-container w3-green">
                                    <h1>Header</h1>
                                </header>

                                <div class="w3-container">
                                    <br></br>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Forest-House.jpg" alt="..." class="img-thumbnail" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>

                                <footer class="w3-container w3-green">
                                    <h5>@alyssamon</h5>
                                </footer>
                            </div>

                        </div>
                    </div>
                </div>

                <br></br>
            </div>






        );
    }
}
