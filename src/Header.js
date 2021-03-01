import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <div className="App-header">
        <h1>Family Tree</h1>
        <nav>
          <ul><Link to="/">Home</Link></ul>
          <ul><Link to="/index">Index</Link></ul>  
        </nav>
      </div>
    )
  }
}

export default Header