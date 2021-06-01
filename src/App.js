import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Profile from './views/Profile'
import Register from './views/Register'
import Navbar from './components/Navbar'
// import Registercomp from '.components/Registercomp'
import Posts from './views/Posts'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <main className='container'>
        <Route exact path='/profile'>
          <Profile />
        </Route>

        <Route exact path='/register'>
          <Register />
        </Route>

        <Route exact path='/posts'>
          <Posts />
        </Route>

        {/* <Route exact path='/updateprofile'>
          <UpdateProfile />
        </Route> */}

        </main>
      </div>
    )
  }
}
