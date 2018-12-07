import React, { Component } from 'react'
import {Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>ESTÁS EN LA HOME!</h1>
         <Link className="App-link" to="/">
         Home
         </Link>
         <br/>
         <Link  to="/signup"> <button className="App-link">Sign Up</button></Link>
         <br/>
         <Link  to="/login"> <button className="App-link">Login</button></Link>
       

      </div>
    )
  }
}

