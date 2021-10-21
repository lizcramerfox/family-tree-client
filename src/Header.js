import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <div className="App-header">
        <h1>Family Tree</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/index">Index</Link> 
        </nav>
      </div>
    )
  }
}

export default Header