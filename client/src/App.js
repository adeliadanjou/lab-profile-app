import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import login from './auth/login';
import signup from './auth/signup';
import {Switch, Route } from 'react-router-dom';

class App extends Component {
 
  render() {
    return (
      <div id="root">

       <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
            <Route exact path="/Login" component={login}/>
        </Switch>

      </div>
    );
  }
}

export default App;
